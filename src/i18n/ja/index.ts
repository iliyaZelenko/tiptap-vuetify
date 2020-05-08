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
          tooltip: '太字'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: '箇条書き'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'コード'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'コードブロック'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: '元に戻す'
        },
        redo: {
          tooltip: 'やり直し'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: '平行線'
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
          tooltip: '番号付きリスト'
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
          tooltip: '取り消し線'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: '下線'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => '見出し ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'リンク変更'
        },
        notActive: {
          tooltip: 'リンク追加'
        }
      },
      window: {
        title: 'リンクの編集',
        form: {
          hrefLabel: 'リンク'
        },
        buttons: {
          close: '閉じる',
          remove: '削除',
          apply: '適用'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: '画像'
      },
      window: {
        title: '画像を追加する',
        form: {
          sourceLink: '画像URL'
        },
        buttons: {
          close: '閉じる',
          apply: '適用'
        }
      }
    }
  }
}
