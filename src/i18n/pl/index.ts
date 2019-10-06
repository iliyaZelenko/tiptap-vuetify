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
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Zaktualizuj link'
        },
        notActive: {
          tooltip: 'Dodaj Link'
        }
      },
      window: {
        title: 'Kontrola link',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Zamknąć',
          remove: 'Usunąć',
          apply: 'Zastosować'
        }
      }
    }
  }
}
