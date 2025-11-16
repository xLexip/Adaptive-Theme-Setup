import { useCallback, useRef, useState } from 'react'
import { AdbClient } from '../services/adb/adbClient'
import { AdbConnectionState, type AdbConnectionContext } from '../types/adb'

const hasWebUsbSupport = (): boolean => typeof navigator !== 'undefined' && 'usb' in navigator

export const useAdbConnection = () => {
  const clientRef = useRef<AdbClient | null>(null)
  const [context, setContext] = useState<AdbConnectionContext>(() =>
    hasWebUsbSupport()
      ? { state: AdbConnectionState.DISCONNECTED }
      : {
          state: AdbConnectionState.ERROR,
          error: 'WebUSB wird nicht unterstützt. Öffne die Seite in Chrome, Edge oder Brave am Desktop.',
        },
  )

  const connect = useCallback(async () => {
    if (!hasWebUsbSupport()) {
      setContext({
        state: AdbConnectionState.ERROR,
        error: 'WebUSB wird nicht unterstützt. Bitte nutze einen Chromium-Desktop-Browser.',
      })
      return
    }

    if (!clientRef.current) {
      clientRef.current = new AdbClient()
    }

    const client = clientRef.current

    try {
      setContext({ state: AdbConnectionState.CONNECTING })
      await client.requestDevice()
      const adb = client.getAdbInstance()
      setContext({
        state: AdbConnectionState.CONNECTED,
        device: adb
          ? {
              serial: adb.serial,
              name: client.getDeviceName() || adb.banner.product || adb.banner.model,
            }
          : undefined,
      })
    } catch (error) {
      setContext({
        state: AdbConnectionState.ERROR,
        error: error instanceof Error ? error.message : 'Unbekannter Fehler beim Verbinden.',
      })
    }
  }, [])

  return {
    context,
    connect,
    getAdb: () => clientRef.current?.getAdbInstance(),
  }
}
