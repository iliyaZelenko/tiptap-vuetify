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
          tooltip: '粗體'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: '項目符號清單'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: '程式碼'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: '程式碼區塊'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: '上一步'
        },
        redo: {
          tooltip: '下一步'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: '水平分隔線'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: '斜體'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: '編號清單'
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
          tooltip: '刪除線'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: '底線'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => ' 標題 ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: '編輯連結'
        },
        notActive: {
          tooltip: '新增連結'
        }
      },
      window: {
        title: '新增連結',
        form: {
          hrefLabel: '連結'
        },
        buttons: {
          close: '關閉',
          remove: '移除',
          apply: '套用'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: '圖片'
      },
      window: {
        title: '新增圖片',
        form: {
          sourceLink: '圖片連結'
        },
        buttons: {
          close: '關閉',
          apply: '套用'
        }
      }
    }
  }
}
