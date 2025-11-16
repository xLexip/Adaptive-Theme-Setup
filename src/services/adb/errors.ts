export class WebUsbNotSupportedError extends Error {
  constructor() {
    super('WebUSB is not available in this browser. Use a Chromium-based desktop browser.')
  }
}

export class DeviceConnectionError extends Error {
  constructor(message: string) {
    super(message)
  }
}

export const friendlyErrorMessage = (error: unknown): string => {
  if (error instanceof DOMException && error.name === 'NotFoundError') {
    return 'Kein Gerät ausgewählt. Bitte erneut versuchen und ein Gerät anklicken.'
  }

  if (error instanceof DOMException && error.name === 'SecurityError') {
    return 'Der Browser hat den Zugriff verweigert. Prüfe deine USB-Berechtigungen.'
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Unbekannter Fehler. Bitte erneut versuchen oder Browser neu starten.'
}

