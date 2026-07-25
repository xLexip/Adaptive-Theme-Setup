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
          error: 'WebUSB is not supported. Open this page in Chrome, Edge, or Brave on desktop.',
        },
  )

  const connect = useCallback(async () => {
    if (!hasWebUsbSupport()) {
      setContext({
        state: AdbConnectionState.ERROR,
        error: 'WebUSB is not supported. Please use a Chromium-based desktop browser.',
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
        error: error instanceof Error ? error.message : 'Unknown error while connecting.',
      })
    }
  }, [])

  return {
    context,
    connect,
    getAdb: () => clientRef.current?.getAdbInstance(),
  }
}
