export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Цитата'
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
          tooltip: 'Отменить'
        },
        redo: {
          tooltip: 'Вернуть'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Разделитель'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Курсив'
        }
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
          tooltip: 'Зачеркнутый'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Подчеркнутый'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => `Заголовок ${level} уровня`
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Изменить ссылку'
        },
        notActive: {
          tooltip: 'Вставить ссылку'
        }
      },
      window: {
        title: 'Ссылка',
        form: {
          hrefLabel: 'URL'
        },
        buttons: {
          close: 'Закрыть',
          remove: 'Удалить',
          apply: 'Применить'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Вставить изображение'
      },
      window: {
        title: 'Добавить изображение',
        form: {
          sourceLink: 'Ссылка на изображение',
          altText: 'Описание',
          addImage: 'Добавить'
        },
        imageUpload: {
          instruction: 'Выберите файл(ы) или перетащите его(их) сюда.'
        },
        buttons: {
          close: 'Отменить',
          apply: 'Вставить'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Список задач'
        }
      }
    }
  }
}
