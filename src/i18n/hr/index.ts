export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Blok citat'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Podebljano'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Obična lista'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kôd'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Blok Kôda'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Poništi'
        },
        redo: {
          tooltip: 'Ponovi'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontalna linija'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Kurziv'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Brojčana lista'
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
          tooltip: 'Precrtano'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Podcrtano'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' nivo naslova'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Promijeni poveznicu'
        },
        notActive: {
          tooltip: 'Umetni poveznicu'
        }
      },
      window: {
        title: 'Umetanje poveznice',
        form: {
          hrefLabel: 'Poveznica'
        },
        buttons: {
          close: 'Zatvori',
          remove: 'Ukloni',
          apply: 'Primijeni'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Slika'
      },
      window: {
        title: 'Umetni sliku',
        form: {
          sourceLink: 'Poveznica na sliku',
          altText: 'Alternativni tekst',
          addImage: 'Umetni sliku'
        },
        imageUpload: {
          instruction: 'Odaberite datoteku (datoteke) ili je povucite ovdje.'
        },
        buttons: {
          close: 'Zatvori',
          apply: 'Primijeni'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Popis obveza'
        }
      }
    }
  }
}
