export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Lainaus'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Lihavoitu'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Pisteytetty lista'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Koodi'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Koodilohko'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Kumoa'
        },
        redo: {
          tooltip: 'Tee uudelleen'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Vaakaviiva'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Kursivoitu'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Numeroitu lista'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Kappale'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Yliviivattu'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Alleviivattu'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => 'Otsikko ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Muokkaa linkkiä'
        },
        notActive: {
          tooltip: 'Luo linkki'
        }
      },
      window: {
        title: 'Linkin muokkaus',
        form: {
          hrefLabel: 'URL'
        },
        buttons: {
          close: 'Sulje',
          remove: 'Poista',
          apply: 'Käytä'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Kuva'
      },
      window: {
        title: 'Lisää kuva',
        form: {
          sourceLink: 'Kuvan URL',
          altText: 'Kuvateksti',
          addImage: 'Lisää kuva'
        },
        imageUpload: {
          instruction: 'Valitse teidosto(t) tai raahaa ne tähän laatikkoon.'
        },
        buttons: {
          close: 'Sulje',
          apply: 'Käytä'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Tehtävälista'
        }
      }
    }
  }
}
