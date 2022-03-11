export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Bloková citácia'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Tučné'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Zoznam s odrážkami'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kód'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Blok kódu'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Späť'
        },
        redo: {
          tooltip: 'Znova'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontálny oddeľovač'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Kurzíva'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Číslovaný zoznam'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Odstavec'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Preškrtnuté'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Podčiarknuté'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + '. úroveň nadpisu'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Zmeniť odkaz'
        },
        notActive: {
          tooltip: 'Pridať odkaz'
        }
      },
      window: {
        title: 'Správa odkazu',
        form: {
          hrefLabel: 'Odkaz'
        },
        buttons: {
          close: 'Zavrieť',
          remove: 'Odstrániť',
          apply: 'Použiť'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Obrázok'
      },
      window: {
        title: 'Pridať obrázok',
        form: {
          sourceLink: 'Adresa obrázka',
          altText: 'Alternatívny text',
          addImage: 'Pridať obrázok'
        },
        imageUpload: {
          instruction: 'Vyberte súbor(y) alebo ho(ich) potiahnite sem.'
        },
        buttons: {
          close: 'Zavrieť',
          apply: 'Použiť'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Zoznam TODO'
        }
      }
    }
  }
}
