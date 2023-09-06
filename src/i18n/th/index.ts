export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'กล่องข้อความอ้างอิง'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'ตัวหนา'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'สัญลักษณ์แสดงหัวข้อย่อย'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'โค้ด'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'โค้ด บล็อก'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'เลิกทํา'
        },
        redo: {
          tooltip: 'ทำซ้ำ'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'เส้นแบ่ง'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'ตัวเอียง'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'รายการลำดับเลข'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'ย่อหน้า'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'ขีดทับ'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'ขีดเส้นใต้'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => 'หัวข้อระดับ ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'เปลี่ยนลิงค์'
        },
        notActive: {
          tooltip: 'เพิ่มลิงค์'
        }
      },
      window: {
        title: 'จัดการลิงค์',
        form: {
          hrefLabel: 'URL'
        },
        buttons: {
          close: 'ปิด',
          remove: 'ลบ',
          apply: 'ยืนยัน'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'รูปภาพ'
      },
      window: {
        title: 'เพิ่มรูปภาพ',
        form: {
          sourceLink: 'ลิงค์รูป',
          altText: 'ชื่อรูป',
          addImage: 'เพิ่มรูป'
        },
        imageUpload: {
          instruction: 'เลือกไฟล์หรือลากไฟล์มาวาง ที่นี่'
        },
        buttons: {
          close: 'ปิด',
          apply: 'ยืนยัน'
        }
      }
    },
    Table: {
      buttons: {
        table: {
          tooltip: 'ตาราง'
        }
      },
      window: {
        title: 'ตาราง',
        form: {
          rowsCount: 'แถว',
          colsCount: 'คอลัมน์',
          withHeaderRow: 'แถวหัวข้อ'
        },
        buttons: {
          close: 'ปิด',
          apply: 'ยืนยัน'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'รายการสิ่งที่ต้องทำ'
        }
      }
    }
  }
}
