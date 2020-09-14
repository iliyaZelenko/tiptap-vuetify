export default {
    extensions: {
      Blockquote: {
        buttons: {
          blockquote: {
            tooltip: 'كتلة اقتباس'
          }
        }
      },
      Bold: {
        buttons: {
          bold: {
            tooltip: 'خط عريض'
          }
        }
      },
      BulletList: {
        buttons: {
          bulletList: {
            tooltip: 'قائمة تعداد نقطي'
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
            tooltip: 'كتلة كود'
          }
        }
      },
      History: {
        buttons: {
          undo: {
            tooltip: 'تراجع'
          },
          redo: {
            tooltip: 'إعادة'
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
            tooltip: 'خط مائل'
          }
        }
      },
      OrderedList: {
        buttons: {
          orderedList: {
            tooltip: 'قائمة مرقمَّة'
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
            tooltip: 'يتوسطه خط'
          }
        }
      },
      Underline: {
        buttons: {
          underline: {
            tooltip: 'تسطير'
          }
        }
      },
      Heading: {
        buttons: {
          heading: {
            tooltip: ({ level }) => 'مستوى العناوين ' + level
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
          title: 'إعدادات الرابط',
          form: {
            hrefLabel: 'الرابط'
          },
          buttons: {
            close: 'غلق',
            remove: 'حذف',
            apply: 'تطبيق'
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
            instruction: 'اختر ملفًا (ملفات) أو اسحبه هنا.'
          },
          buttons: {
            close: 'غلق',
            apply: 'تطبيق'
          }
        }
      },
      TodoList: {
        buttons: {
          todoList: {
            tooltip: 'قائمة المهمات'
          }
        }
      }
    }
  }
  