import IconInterface from '~/extensions/nativeExtensions/icons/IconInterface'

export default class VuetifyIcon implements IconInterface {
  constructor (public name) {
  }

  toString () {
    return this.name
  }
}
