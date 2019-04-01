export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Блок цитаты'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Жирный'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Маркированный список'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Код'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Блок кода'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Назад'
        },
        redo: {
          tooltip: 'Вперед'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Горизонтальная линия'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Курсивный'
        }
      }
    },
    Link: {
      bubble: {
        updateLink: 'Обновить ссылку',
        addLink: 'Добавить ссылку'
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Упорядоченный список'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Параграф'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Перечерктнутый'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Подчерктнутый'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => `Заголовок ${level} уровня`
        }
      }
    }
  }
}
