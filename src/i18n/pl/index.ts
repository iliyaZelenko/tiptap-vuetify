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
          tooltip: args => 'Nagłówek ' + args.level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Zaktualizuj odnośnik'
        },
        notActive: {
          tooltip: 'Dodaj odnośnik'
        }
      },
      window: {
        title: 'Odnośnik',
        form: {
          hrefLabel: 'Adres URL'
        },
        buttons: {
          close: 'Zamknij',
          remove: 'Usuń',
          apply: 'Zastosuj'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Obrazek'
      },
      window: {
        title: 'Dodaj obrazek',
        form: {
          sourceLink: 'Adres URL obrazka'
        },
        buttons: {
          close: 'Zamknij',
          apply: 'Zastosuj'
        }
      }
    }
  }
}
