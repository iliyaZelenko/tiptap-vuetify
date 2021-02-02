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
          tooltip: 'Маркірований список'
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
          tooltip: 'Блок коду'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Скасувати'
        },
        redo: {
          tooltip: 'Повторити'
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
          tooltip: 'Впорядкований список'
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
          tooltip: ({ level }) => 'Заголовк ' + level + ' рівня'
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
        title: 'Керування посиланням',
        form: {
          hrefLabel: 'Посилання'
        },
        buttons: {
          close: 'Закрити',
          remove: 'Видалити',
          apply: 'Застосувати'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Зображення'
      },
      window: {
        title: 'Додати зображення',
        form: {
          sourceLink: 'Посилання на зображення',
          altText: 'Альтернативний текст',
          addImage: 'Додати зображення'
        },
        imageUpload: {
          instruction: 'Виберіть файл або перетягніть його сюди.'
        },
        buttons: {
          close: 'Закрити',
          apply: 'Застосувати'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Список справ'
        }
      }
    }
  }
}
