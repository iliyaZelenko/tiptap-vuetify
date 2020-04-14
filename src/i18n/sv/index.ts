export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Blockcitat'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Fet'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Punktlista'
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
          tooltip: 'Kodblock'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Ångra'
        },
        redo: {
          tooltip: 'Gör om'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horisontell linje'
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
          tooltip: 'Nummerlista'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Stycke'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Genomstruken'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Understruken'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => 'Rubriknivå ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Ändra länk'
        },
        notActive: {
          tooltip: 'Lägg till länk'
        }
      },
      window: {
        title: 'Länkinställningar',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Stäng',
          remove: 'Ta bort',
          apply: 'Applicera'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Bild'
      },
      window: {
        title: 'Lägg till bild',
        or: 'ELLER',
        form: {
          sourceLink: 'Bild-URL'
        },
        buttons: {
          close: 'Stäng',
          apply: 'Applicera'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Att göra-lista'
        }
      }
    }
  }
}
