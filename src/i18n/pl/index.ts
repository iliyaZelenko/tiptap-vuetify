export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Blok cytatu'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Pogrubienie'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Lista punktów'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kod'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Blok kodu'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Cofnij'
        },
        redo: {
          tooltip: 'Ponów'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Linia pozioma'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Kursywa'
        }
      }
    },
    Link: {
      bubble: {
        updateLink: 'Zaktualizuj link',
        addLink: 'Dodaj Link'
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Lista numerowana'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraf'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Przekreślenie'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Podkreślenie'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: args => args.level + ' nagłówek'
        }
      }
    }
  }
}
