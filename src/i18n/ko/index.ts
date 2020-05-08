export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: '인용'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: '굵게'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: '글머리 기호'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: '코드'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: '코드 블록'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: '입력 취소'
        },
        redo: {
          tooltip: '입력 다시 실행'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: '수평선'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: '기울임꼴'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: '번호 매기기'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: '단락'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: '취소선'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: '밑줄'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => '헤딩 ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: '링크 변경'
        },
        notActive: {
          tooltip: '링크 추가'
        }
      },
      window: {
        title: '링크 편집',
        form: {
          hrefLabel: '링크'
        },
        buttons: {
          close: '닫기',
          remove: '삭제',
          apply: '적용'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: '이미지'
      },
      window: {
        title: '이미지 추가',
        form: {
          sourceLink: '이미지 URL'
        },
        buttons: {
          close: '닫기',
          apply: '적용'
        }
      }
    }
  }
}
