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
          tooltip: 'Opstilling med punkttegn'
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
          tooltip: 'Annuller fortryd'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Vandret streg'
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
          tooltip: 'Nummereret liste'
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
          tooltip: 'Gennemstreg'
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
          tooltip: 'Rediger link'
        },
        notActive: {
          tooltip: 'Tilføj Link'
        }
      },
      window: {
        title: 'Linkindstillinger',
        form: {
          hrefLabel: 'URL'
        },
        buttons: {
          close: 'Fortryd',
          remove: 'Fjern',
          apply: 'Anvend'
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
          sourceLink: 'Billede URL',
          altText: 'Alternativ tekst',
          addImage: 'Tilføj billede'
        },
        imageUpload: {
          instruction: 'Vælg fil(er) eller træk dem hertil.'
        },
        buttons: {
          close: 'Fortryd',
          apply: 'Anvend'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Checkliste'
        }
      }
    }
  }
}
