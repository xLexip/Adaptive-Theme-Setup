import {
  Adb,
  AdbDaemonTransport,
} from '@yume-chan/adb'
import { AdbDaemonWebUsbDeviceManager } from '@yume-chan/adb-daemon-webusb'
import { BrowserCredentialStore } from './credentialStore'
import { GRANT_PERMISSION_COMMAND } from '../../constants/commands'

const manager = AdbDaemonWebUsbDeviceManager.BROWSER

const credentialStore = new BrowserCredentialStore()

export class AdbClient {
  #adb: Adb | undefined
  #deviceName?: string

  async requestDevice(): Promise<void> {
    if (!manager) {
      throw new Error('WebUSB is not supported by this browser.')
    }

    const device = await manager.requestDevice()
    if (!device) {
      throw new Error('No device selected.')
    }

    const connection = await device.connect()
    const transport = await AdbDaemonTransport.authenticate({
      serial: device.serial,
      connection,
      credentialStore,
    })
    this.#adb = new Adb(transport)
    this.#deviceName = device.name
  }

  getAdbInstance(): Adb | undefined {
    return this.#adb
  }

  getDeviceName(): string | undefined {
    return this.#deviceName
  }

  private assertConnected(): Adb {
    if (!this.#adb) {
      throw new Error('No device connected. Please connect a device first.')
    }
    return this.#adb
  }

  async runShellCommand(command: string): Promise<string> {
    const adb = this.assertConnected()
    const output = await adb.subprocess.noneProtocol.spawnWaitText(command)
    return output.trim()
  }

  async grantWriteSecureSettings(): Promise<string> {
    return this.runShellCommand(GRANT_PERMISSION_COMMAND)
  }
}
