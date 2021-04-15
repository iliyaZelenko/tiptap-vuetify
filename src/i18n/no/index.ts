export default {
    extensions: {
      Blockquote: {
        buttons: {
          blockquote: {
            tooltip: 'Blokk sitat'
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
            tooltip: 'Punktliste'
          }
        }
      },
      Code: {
        buttons: {
          code: {
            tooltip: 'Kodesnutt'
          }
        }
      },
      CodeBlock: {
        buttons: {
          codeBlock: {
            tooltip: 'Kode blokk'
          }
        }
      },
      History: {
        buttons: {
          undo: {
            tooltip: 'Angre'
          },
          redo: {
            tooltip: 'Gjenta'
          }
        }
      },
      HorizontalRule: {
        buttons: {
          horizontalRule: {
            tooltip: 'Kantlinje'
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
            tooltip: 'Nummerert liste'
          }
        }
      },
      Paragraph: {
        buttons: {
          paragraph: {
            tooltip: 'Avsnitt'
          }
        }
      },
      Strike: {
        buttons: {
          strike: {
            tooltip: 'Gjennomstreking'
          }
        }
      },
      Underline: {
        buttons: {
          underline: {
            tooltip: 'Understreking'
          }
        }
      },
      Heading: {
        buttons: {
          heading: {
            tooltip: ({ level }) => ' Overskrift ' + level
          }
        }
      },
      Link: {
        buttons: {
          isActive: {
            tooltip: 'Endre kobling'
          },
          notActive: {
            tooltip: 'Opprett kobling'
          }
        },
        window: {
          title: 'Sett inn kobling',
          form: {
            hrefLabel: 'URL'
          },
          buttons: {
            close: 'Avbryt',
            remove: 'Fjern',
            apply: 'Sett inn'
          }
        }
      },
      Image: {
        buttons: {
          tooltip: 'Bilde'
        },
        window: {
          title: 'Sett inn bilde',
          form: {
            sourceLink: 'Bilde URL',
            altText: 'Alternativ tekst',
            addImage: 'Legg til bilde'
          },
          imageUpload: {
            instruction: 'Velg en fil(er) eller slipp den her.'
          },
          buttons: {
            close: 'Avbryt',
            apply: 'Sett inn'
          }
        }
      },
      TodoList: {
        buttons: {
          todoList: {
            tooltip: 'Gjøremålsliste'
          }
        }
      }
    }
  }
  