export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Blok kutipan'
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
          tooltip: 'Daftar poin'
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
          tooltip: 'Urungkan'
        },
        redo: {
          tooltip: 'Ulangi'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Garis horizontal'
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
          tooltip: 'Penomoran'
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
          tooltip: 'Garis bawah'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => 'Judul tingkat ' + level
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Ubah Tautan'
        },
        notActive: {
          tooltip: 'Tambah Tautan'
        }
      },
      window: {
        title: 'Pengaturan Link',
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
          instruction: 'Pilih atau geser file ke sini.'
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
          tooltip: 'Daftar Tugas'
        }
      }
    }
  }
}
