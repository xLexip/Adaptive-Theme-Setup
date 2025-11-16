const toBinaryString = (bytes: Uint8Array): string => {
  let binary = ''
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  })
  return binary
}

export const uint8ArrayToBase64 = (bytes: Uint8Array): string => {
  return btoa(toBinaryString(bytes))
}

const fromBinaryString = (binary: string): Uint8Array => {
  const output = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) {
    output[i] = binary.charCodeAt(i)
  }
  return output
}

export const base64ToUint8Array = (value: string): Uint8Array => {
  const binary = atob(value)
  return fromBinaryString(binary)
}
