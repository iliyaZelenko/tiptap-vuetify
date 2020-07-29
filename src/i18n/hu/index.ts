export default {
    extensions: {
      Blockquote: {
        buttons: {
          blockquote: {
            tooltip: 'Idézet'
          }
        }
      },
      Bold: {
        buttons: {
          bold: {
            tooltip: 'Félkövér'
          }
        }
      },
      BulletList: {
        buttons: {
          bulletList: {
            tooltip: 'Lista pontokkal'
          }
        }
      },
      Code: {
        buttons: {
          code: {
            tooltip: 'Programkód'
          }
        }
      },
      CodeBlock: {
        buttons: {
          codeBlock: {
            tooltip: 'Programkódblokk'
          }
        }
      },
      History: {
        buttons: {
          undo: {
            tooltip: 'Vissza'
          },
          redo: {
            tooltip: 'Előre'
          }
        }
      },
      HorizontalRule: {
        buttons: {
          horizontalRule: {
            tooltip: 'Vízszintes vonal'
          }
        }
      },
      Italic: {
        buttons: {
          italic: {
            tooltip: 'Dőlt'
          }
        }
      },
      OrderedList: {
        buttons: {
          orderedList: {
            tooltip: 'Lista felsorolással'
          }
        }
      },
      Paragraph: {
        buttons: {
          paragraph: {
            tooltip: 'Paragrafus'
          }
        }
      },
      Strike: {
        buttons: {
          strike: {
            tooltip: 'Áthúzott'
          }
        }
      },
      Underline: {
        buttons: {
          underline: {
            tooltip: 'Aláhúzott'
          }
        }
      },
      Heading: {
        buttons: {
          heading: {
            tooltip: ({ level }) => level + '. szintű kiemelés'
          }
        }
      },
      Link: {
        buttons: {
          isActive: {
            tooltip: 'Link megváltoztatása'
          },
          notActive: {
            tooltip: 'Link hozzáadása'
          }
        },
        window: {
          title: 'Link kontroll',
          form: {
            hrefLabel: 'URL'
          },
          buttons: {
            close: 'Bezárás',
            remove: 'Törlés',
            apply: 'Mentés'
          }
        }
      },
      Image: {
        buttons: {
          tooltip: 'Kép'
        },
        window: {
          title: 'Kép hozzáadása',
          form: {
            sourceLink: 'Kép URL-e',
            altText: 'Képleírás',
            addImage: 'Hozzáadása'
          },
          imageUpload: {
            instruction: 'Válasszon fájlt.'
          },
          buttons: {
            close: 'Bezárás',
            apply: 'Mentés'
          }
        }
      },
      TodoList: {
        buttons: {
          todoList: {
            tooltip: 'Teendő lista'
          }
        }
      }
    }
  }
  