export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'ציטוט'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'מודגש'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'רשימה לא ממוספרת'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'קוד'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'בלוק קוד'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'ביטול'
        },
        redo: {
          tooltip: 'בצע שוב'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'קו אופקי'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'מוטה'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'רשימה ממוספרת'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'פיסקה'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'קו אמצע'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'קו תחתון'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' כותרת בגודל'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'שנה קישור'
        },
        notActive: {
          tooltip: 'הוסף קישור'
        }
      },
      window: {
        title: 'ניהול קישור',
        form: {
          hrefLabel: 'כתובת'
        },
        buttons: {
          close: 'סגור',
          remove: 'הסר',
          apply: 'החל'
        }
      }
    }
  }
}
