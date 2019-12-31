export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: '块引用'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: '加粗'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: '符号列表'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Code'
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
          tooltip: '横线'
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
          tooltip: '序号列表'
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
          tooltip: '中划线'
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
          tooltip: ({ level }) => level + ' 级标题'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: '编辑链接'
        },
        notActive: {
          tooltip: '增加链接'
        }
      },
      window: {
        title: '链接编辑',
        form: {
          hrefLabel: 'Href'
        },
        buttons: {
          close: '关闭',
          remove: '删除',
          apply: '确认'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: '图片'
      },
      window: {
        title: '增加图片',
        or: '或',
        form: {
          sourceLink: '输入图片URL'
        },
        buttons: {
          close: '关闭',
          apply: '确认'
        }
      }
    }
  }
}
