export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Block Zitat'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Fett'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Aufzählungsliste'
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
          tooltip: 'Code Abschnitt'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Rückgängig'
        },
        redo: {
          tooltip: 'Wiederherstellen'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontale Linie'
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
          tooltip: 'Geordnete Liste'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraph'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Durchgestrichen'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Unterstreichen'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' level Überschrift'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Link ändern'
        },
        notActive: {
          tooltip: 'Link hinzufügen'
        }
      },
      window: {
        title: 'Link Kontrolle',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Schließen',
          remove: 'Entfernen',
          apply: 'Übernehmen'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Bild'
      },
      window: {
        title: 'Bild hinzufügen',
        form: {
          sourceLink: 'Bild URL'
        },
        buttons: {
          close: 'Schließen',
          apply: 'Übernehmen'
        }
      }
    }
  }
}
