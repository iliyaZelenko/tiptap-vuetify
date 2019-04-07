import IconInterface from '~/extensionAdapters/icons/IconInterface'

export default class TextIcon implements IconInterface {
  constructor (public text) {}

  toString () {
    return this.text
  }
}
