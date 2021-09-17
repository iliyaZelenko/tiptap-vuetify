export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Bloco de citação'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Negrito'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Lista de pontos'
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
          tooltip: 'Bloco de código'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Desfazer'
        },
        redo: {
          tooltip: 'Refazer'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Linha horizontal'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Itálico'
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
          tooltip: 'Parágrafo'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Riscado'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Sublinhado'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => 'cabeçalho nível ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Mudar Link'
        },
        notActive: {
          tooltip: 'Adicionar Link'
        }
      },
      window: {
        title: 'Configurar link',
        form: {
          hrefLabel: 'link'
        },
        buttons: {
          close: 'Fechar',
          remove: 'Remover',
          apply: 'Aplicar'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Imagem'
      },
      window: {
        title: 'Adicionar Imagem',
        form: {
          sourceLink: 'URL da imagem',
          altText: 'Texto Alternativo',
          addImage: 'Adicionar Imagem'
        },
        imageUpload: {
          instruction: 'Escolha o(s) arquivo(s).'
        },
        buttons: {
          close: 'Fechar',
          apply: 'Aplicar'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Lista de afazeres'
        }
      }
    }
  }
}
