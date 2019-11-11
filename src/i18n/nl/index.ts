export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Citaatblock'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Vet'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Opsomming tekens'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Code'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Code blok'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Ongedaan maken'
        },
        redo: {
          tooltip: 'Opnieuw uitvoeren'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontale lijn'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Cursief'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Genummerde lijst'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraaf'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Doorhalen'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Onderstrepen'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => 'Kop ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Link wijzigigen'
        },
        notActive: {
          tooltip: 'Link invoegen'
        }
      },
      window: {
        title: 'Link controle',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Sluiten',
          remove: 'Verwijderen',
          apply: 'Toepassen'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Afbeelding'
      },
      window: {
        title: 'Afbeelding toevoegen',
        or: 'OF',
        form: {
          sourceLink: 'Afbeelding URL'
        },
        buttons: {
          close: 'Sluiten',
          apply: 'Toepassen'
        }
      }
    }
  }
}
