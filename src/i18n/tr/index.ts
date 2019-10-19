export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Alıntı'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Kalın'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Liste'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kod'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Kod Bloğu'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Geri'
        },
        redo: {
          tooltip: 'İleri'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Yatay çizgi'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'İtalik'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Numaralı Liste'
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
          tooltip: 'Üstü Çizili'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Altı Çizili'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' Başlık'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Link\'i Düzenle'
        },
        notActive: {
          tooltip: 'Link Ekle'
        }
      },
      window: {
        title: 'Link Kontrol',
        form: {
          hrefLabel: 'Adres'
        },
        buttons: {
          close: 'Kapat',
          remove: 'Sil',
          apply: 'Uygula'
        }
      }
    }
  }
}
