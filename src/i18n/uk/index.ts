export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Блок цитати'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Жирний'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Маркований список'
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
          tooltip: 'Горизонтальна лінія'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Курсивний'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Упорядкований список'
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
          tooltip: 'Перекреслений'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Підкреслений'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => `Заголовок ${level} рівня`
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Змінити посилання'
        },
        notActive: {
          tooltip: 'Додати посилання'
        }
      },
      window: {
        title: 'Управління посиланням',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: 'Закрити',
          remove: 'Вилучити',
          apply: 'Застосувати'
        }
      }
    }
  }
}
