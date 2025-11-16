export enum AdbConnectionState {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  WAITING_FOR_AUTH = 'WAITING_FOR_AUTH',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
}

export interface ConnectedDeviceInfo {
  serial: string
  name?: string
}

export interface ShellCommandResult {
  output: string
  error?: string
}

export interface AdbConnectionContext {
  state: AdbConnectionState
  device?: ConnectedDeviceInfo
  error?: string
}

export enum CommandExecutionStatus {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface CommandExecutionState {
  status: CommandExecutionStatus
  message?: string
  output?: string
}
