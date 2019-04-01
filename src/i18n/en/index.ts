export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Block quote'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Bold'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Bulleted list'
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
          tooltip: 'Code block'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Undo'
        },
        redo: {
          tooltip: 'Redo'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Horizontal line'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Italic'
        }
      }
    },
    Link: {
      bubble: {
        updateLink: 'Update Link',
        addLink: 'Add Link'
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Ordered list'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraph'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Strike'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Underline'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: args => args.level + ' level header'
        }
      }
    }
  }
}
