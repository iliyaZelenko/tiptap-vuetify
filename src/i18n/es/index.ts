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
          tooltip: ({ level }) => `Nivel de encabezado ${level}`
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Actualizar enlace'
        },
        notActive: {
          tooltip: 'Añadir enlace'
        }
      },
      window: {
        title: 'Control de enlace',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Cerrar',
          remove: 'Eliminar',
          apply: 'Aplicar'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Imagen'
      },
      window: {
        title: 'Agregar Imagen',
        form: {
          sourceLink: 'URL de la Imagen'
        },
        buttons: {
          close: 'Cerrar',
          apply: 'Aplicar'
        }
      }
    }
  }
}
