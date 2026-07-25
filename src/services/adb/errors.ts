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
    return 'No device selected. Please try again and choose a device.'
  }

  if (error instanceof DOMException && error.name === 'SecurityError') {
    return 'The browser denied access. Check your USB permissions.'
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Unknown error. Please try again or restart the browser.'
}
