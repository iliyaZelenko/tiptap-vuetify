export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Blokcitat'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Fed'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Punktopstilling'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kode'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Kodeblok'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Fortryd'
        },
        redo: {
          tooltip: 'Gentag'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontal line'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Kursiv'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Opstilling med tal'
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
          tooltip: 'Gennemstreget'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Understregning'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => 'Overskrift ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Skift link'
        },
        notActive: {
          tooltip: 'Tilføj link'
        }
      },
      window: {
        title: 'Link-funktioner',
        form: {
          hrefLabel: 'Link'
        },
        buttons: {
          close: 'Luk',
          remove: 'Fjern',
          apply: 'Gem'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Billede'
      },
      window: {
        title: 'Tilføj billede',
        form: {
          sourceLink: 'Billede link',
          altText: 'Alternativ tekst',
          addImage: 'Tilføj billede'
        },
        imageUpload: {
          instruction: 'Vælg filer eller træk dem hertil.'
        },
        buttons: {
          close: 'Luk',
          apply: 'Gem'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Todo liste'
        }
      }
    }
  }
}
