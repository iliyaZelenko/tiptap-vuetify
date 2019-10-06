import { PACKAGE_NAME } from '~/const'

class ConsoleLogger {
  warn (msg) {
    console.warn(`${PACKAGE_NAME}: ${msg}`)
  }

  error (msg) {
    console.error(`${PACKAGE_NAME}: ${msg}`)
  }
}

export default new ConsoleLogger()
