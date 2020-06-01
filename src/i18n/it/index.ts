export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Citazione'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Grassetto'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Elenco puntato'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Codice'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Blocco codice'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Annulla'
        },
        redo: {
          tooltip: 'Ripristina'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Linea orizzontale'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Corsivo'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Elenco numerato'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragrafo'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Barrato'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Sottolineato'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' livello intestazione'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Modifica collegamento'
        },
        notActive: {
          tooltip: 'Aggiungi collegamento'
        }
      },
      window: {
        title: 'Gestione collegamento',
        form: {
          hrefLabel: 'Indirizzo'
        },
        buttons: {
          close: 'Chiudi',
          remove: 'Rimuovi',
          apply: 'Applica'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Immagine'
      },
      window: {
        title: 'Aggiungi Immagine',
        form: {
          sourceLink: 'Indirizzo Immagine',
          altText: 'Testo Alternativo',
          addImage: 'Aggiungi Immagine'
        },
        imageUpload: {
          instruction: 'Seleziona file o trascinalo(i) qui.'
        },
        buttons: {
          close: 'Chiudi',
          apply: 'Applica'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Cose da fare'
        }
      }
    }
  }
}
