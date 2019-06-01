import { PACKAGE_NAME } from '~/const'

class ConsoleLogger {
  warn (msg) {
    console.warn(`${PACKAGE_NAME}: ${msg}`)
  }
}

export default new ConsoleLogger()
