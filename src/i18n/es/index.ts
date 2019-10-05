export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Cita en bloque'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Texto en negrita'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Lista no ordenada'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Código'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Bloque de código'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Deshacer'
        },
        redo: {
          tooltip: 'Rehacer'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Línea horizontal'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Texto en cursiva'
        }
      }
    },
    Link: {
      bubble: {
        updateLink: 'Actualizar enlace',
        addLink: 'Añadir enlace'
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Lista ordenada'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Párrafo'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Tachar texto'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Subrayar texto'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: args => `Nivel de encabezado ${args.level}`
        }
      }
    }
  }
}
