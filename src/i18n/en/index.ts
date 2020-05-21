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
          tooltip: ({ level }) => level + ' level header'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Change Link'
        },
        notActive: {
          tooltip: 'Add Link'
        }
      },
      window: {
        title: 'Link control',
        form: {
          hrefLabel: 'URL'
        },
        buttons: {
          close: 'Close',
          remove: 'Remove',
          apply: 'Apply'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Image'
      },
      window: {
        title: 'Add Image',
        form: {
          sourceLink: 'Image URL',
          altText: 'Alternative Text',
          addImage: 'Add Image'
        },
        imageUpload: {
          instruction: 'Choose a file(s) or drag it here.'
        },
        buttons: {
          close: 'Close',
          apply: 'Apply'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'To Do List'
        }
      }
    }
  }
}
