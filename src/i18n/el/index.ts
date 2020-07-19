export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Παράθεση'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Έντονη γραφή'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Λίστα με κουκκίδες'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Κώδικας'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Μπλοκ κώδικα'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Αναίρεση'
        },
        redo: {
          tooltip: 'Ακύρωση αναίρεσης'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Οριζόντια γραμμή'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Πλάγια γραφή'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Λίστα με αρίθμηση'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Παράγραφος'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Επιγράμμιση'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Υπογράμμιση'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + ' επίπεδο κεφαλίδας'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Αλλαγή συνδέσμου'
        },
        notActive: {
          tooltip: 'Προσθήκη συνδέσμου'
        }
      },
      window: {
        title: 'Διαχείριση συνδέσμου',
        form: {
          hrefLabel: 'Διεύθυνση'
        },
        buttons: {
          close: 'Κλείσιμο',
          remove: 'Αφαίρεση',
          apply: 'Εφαρμογή'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Εικόνα'
      },
      window: {
        title: 'Προσθήκη εικόνας',
        form: {
          sourceLink: 'Διεύθυνση εικόνας',
          altText: 'Εναλλακτικό κείμενο',
          addImage: 'Προσθήκη εικόνας'
        },
        imageUpload: {
          instruction: 'Επιλέξτε ένα αρχείο ή σύρετε το εδώ.'
        },
        buttons: {
          close: 'Κλείσιμο',
          apply: 'Εφαρμογή'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Λίστα εκκρεμοτήτων'
        }
      }
    }
  }
}
