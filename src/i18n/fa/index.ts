export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'نقل قول'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'درشت'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'لیست بولت'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'کد'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'بلوک کد'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'بازگشت'
        },
        redo: {
          tooltip: 'مجدد'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'خط افقی'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'ایتالیک'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'لیست مرتب شده'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'پاراگراف'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'خط زدن'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'خط زیرین'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' سطح هدر'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'عوض کردن لینک'
        },
        notActive: {
          tooltip: 'اضافه لینک'
        }
      },
      window: {
        title: 'کنترل لینک',
        form: {
          hrefLabel: 'لینک'
        },
        buttons: {
          close: 'بستن',
          remove: 'حذف',
          apply: 'اعمال'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'عکس'
      },
      window: {
        title: 'اضافه عکس',
        or: 'OR',
        form: {
          sourceLink: 'لینک عکس'
        },
        buttons: {
          close: 'بستن',
          apply: 'اعمال'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'لیست کارها'
        }
      }
    }
  }
}
