import type { AdbCredentialStore, AdbPrivateKey } from '@yume-chan/adb'
import { base64ToUint8Array, uint8ArrayToBase64 } from '../../utils/base64'

const STORAGE_KEY = 'hecate-adb-private-key'

interface StoredKey {
  privateKey: string
  name?: string
}

const serializeKey = async (key: CryptoKey, name?: string): Promise<StoredKey> => ({
  privateKey: uint8ArrayToBase64(new Uint8Array(await crypto.subtle.exportKey('pkcs8', key))),
  name,
})

const deserializeKey = (stored: StoredKey): Uint8Array => base64ToUint8Array(stored.privateKey)

const loadStoredKey = (): StoredKey | undefined => {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  return raw ? (JSON.parse(raw) as StoredKey) : undefined
}

const persistKey = (stored: StoredKey): void => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
}

const generateNewKeyPair = async (name?: string): Promise<StoredKey> => {
  const { privateKey } = await crypto.subtle.generateKey(
    {
      name: 'RSA-PSS',
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: 'SHA-256',
    },
    true,
    ['sign'],
  )

  const stored = await serializeKey(privateKey, name)
  persistKey(stored)
  return stored
}

export class BrowserCredentialStore implements AdbCredentialStore {
  constructor(private readonly keyName: string = 'Adaptive Theme Helper') {}

  async generateKey(): Promise<AdbPrivateKey> {
    const stored = await generateNewKeyPair(this.keyName)
    return this.toPrivateKey(stored)
  }

  async *iterateKeys(): AsyncIterable<AdbPrivateKey> {
    const stored = loadStoredKey()
    if (!stored) {
      return
    }

    yield this.toPrivateKey(stored)
  }

  private async toPrivateKey(stored: StoredKey): Promise<AdbPrivateKey> {
    return {
      buffer: deserializeKey(stored),
      name: stored.name,
    }
  }
}
