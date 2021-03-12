export default {
    extensions: {
      Blockquote: {
        buttons: {
          blockquote: {
            tooltip: 'إقتباس'
          }
        }
      },
      Bold: {
        buttons: {
          bold: {
            tooltip: 'عريض'
          }
        }
      },
      BulletList: {
        buttons: {
          bulletList: {
            tooltip: 'قائمة نقطية'
          }
        }
      },
      Code: {
        buttons: {
          code: {
            tooltip: 'كود'
          }
        }
      },
      CodeBlock: {
        buttons: {
          codeBlock: {
            tooltip: 'فقرة كود'
          }
        }
      },
      History: {
        buttons: {
          undo: {
            tooltip: 'تراجع'
          },
          redo: {
            tooltip: 'تكرار'
          }
        }
      },
      HorizontalRule: {
        buttons: {
          horizontalRule: {
            tooltip: 'خط أفقي'
          }
        }
      },
      Italic: {
        buttons: {
          italic: {
            tooltip: 'مائل'
          }
        }
      },
      OrderedList: {
        buttons: {
          orderedList: {
            tooltip: 'قائمة مرتبة'
          }
        }
      },
      Paragraph: {
        buttons: {
          paragraph: {
            tooltip: 'فقرة'
          }
        }
      },
      Strike: {
        buttons: {
          strike: {
            tooltip: 'خلاله خط'
          }
        }
      },
      Underline: {
        buttons: {
          underline: {
            tooltip: 'تحته خط'
          }
        }
      },
      Heading: {
        buttons: {
          heading: {
            tooltip: ({ level }) => level + ' عنوان'
          }
        }
      },
      Link: {
        buttons: {
          isActive: {
            tooltip: 'تغيير الرابط'
          },
          notActive: {
            tooltip: 'إضافة رابط'
          }
        },
        window: {
          title: 'التحكم بالرابط',
          form: {
            hrefLabel: 'رابط تشعبي'
          },
          buttons: {
            close: 'إغلاق',
            remove: 'إزالة',
            apply: 'موافق'
          }
        }
      },
      Image: {
        buttons: {
          tooltip: 'صورة'
        },
        window: {
          title: 'إضافة صورة',
          form: {
            sourceLink: 'رابط الصورة',
            altText: 'النص البديل',
            addImage: 'إضافة صورة'
          },
          imageUpload: {
            instruction: 'قم باختيار ملف أو مجموعة ملفات او سحبها هنا.'
          },
          buttons: {
            close: 'إغلاق',
            apply: 'موافق'
          }
        }
      },
      TodoList: {
        buttons: {
          todoList: {
            tooltip: 'قائمة المهام'
          }
        }
      }
    }
  }
