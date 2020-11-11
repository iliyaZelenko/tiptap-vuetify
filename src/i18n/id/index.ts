export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Kutipan'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Tebal'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Daftar Bersimbol'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kode'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Blok Kode'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Batalkan'
        },
        redo: {
          tooltip: 'Ulang'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Garis Horizontal'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Miring'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Daftar Bernomor'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Paragraf'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Coret'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Garis Bawah'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' tingkatan judul'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Ganti Tautan'
        },
        notActive: {
          tooltip: 'Tambah Tautan'
        }
      },
      window: {
        title: 'Kontrol Tautan',
        form: {
          hrefLabel: 'URL'
        },
        buttons: {
          close: 'Tutup',
          remove: 'Hapus',
          apply: 'Terapkan'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Gambar'
      },
      window: {
        title: 'Tambah Gambar',
        form: {
          sourceLink: 'URL Gambar',
          altText: 'Teks Alternatif',
          addImage: 'Tambah Gambar'
        },
        imageUpload: {
          instruction: 'Pilih gambar atau seret kesini.'
        },
        buttons: {
          close: 'Tutup',
          apply: 'Terapkan'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Daftar yang harus dilakukan'
        }
      }
    }
  }
}
