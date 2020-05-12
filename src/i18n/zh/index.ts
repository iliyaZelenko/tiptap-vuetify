export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: '引用'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: '粗体'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: '项目符号'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: '代码'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: '代码块'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: '撤销'
        },
        redo: {
          tooltip: '重做'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: '水平线'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: '斜体'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: '数字编号'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: '段落'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: '删除线'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: '下划线'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' 级标题 '
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: '改变链接'
        },
        notActive: {
          tooltip: '增加链接'
        }
      },
      window: {
        title: '增加链接',
        form: {
          hrefLabel: '链接'
        },
        buttons: {
          close: '关闭',
          remove: '移除',
          apply: '使用'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: '图片'
      },
      window: {
        title: '添加图片',
        form: {
          sourceLink: '图片链接'
        },
        buttons: {
          close: '关闭',
          apply: '使用'
        }
      }
    }
  }
}
