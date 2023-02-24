const appPage = {
  id: {
    title: 'BetHup Note',
    nav: {
      home: 'Beranda',
      archives: 'Arsip'
    },
    msg: {
      confirm: 'Apakah anda yakin?',
      loading: 'Memuat data...',
      error: 'Ada kesalahan teknis. Coba lagi nanti.'
    },
    add: 'Tambah',
    cancel: 'Batal',
    delete: 'Hapus',
    archive: 'Arsipkan',
    active: 'Aktifkan',
    back: 'Kembali',
    pageNotFound: 'Halaman Tidak Ditemukan.'
  },
  en: {
    title: 'Notes App',
    nav: {
      home: 'Home',
      archives: 'Archives'
    },
    msg: {
      confirm: 'Are you sure?',
      loading: 'Loading...',
      error: 'Error. Try again later.'
    },
    add: 'Add',
    cancel: 'Cancel',
    delete: 'Delete',
    archive: 'Archive',
    active: 'Active',
    back: 'Back',
    pageNotFound: 'Page Not Found'
  }
}

const loginPage = {
  id: {
    header: 'Yuk, login untuk menggunakan BetHup Note.',
    footer: 'Belum punya akun?',
    footerRegisterLink: 'Daftar disini'
  },
  en: {
    header: 'Login to use app, please.',
    footer: 'Don\'t have an account?',
    footerRegisterLink: 'Register here'
  }
}

const registerPage = {
  id: {
    header: 'Isi form untuk mendaftar akun.',
    footer: 'Sudah punya akun?',
    footerLoginLink: 'Login disini',
    msg: {
      registerSuccess: 'Akun berhasil dibuat. Silahkan login.'
    }
  },
  en: {
    header: 'Fill the form to register account.',
    footer: 'Already have an account?',
    footerLoginLink: 'Login here',
    msg: {
      registerSuccess: 'User created successfully.'
    }
  }
}

const notePage = {
  id: {
    header: 'Catatan Aktif',
    searchPlaceholder: 'Cari berdasarkan judul ...',
    empty: 'Tidak ada catatan.'
  },
  en: {
    header: 'Active Notes',
    searchPlaceholder: 'Search by title ...',
    empty: 'Empty.'
  }
}

const notesNewPage = {
  id: {
    titlePlaceholder: 'Judul',
    bodyPlaceholder: '<b><i><u>Isi Catatan</u></i></b>',
    msgSuccess: 'Berhasil menambahkan catatan!'
  },
  en: {
    titlePlaceholder: 'Title',
    bodyPlaceholder: '<b><i><u>Notes Content</u></i></b>',
    msgSuccess: 'Successfully add notes!'
  }
}

const notesIdPage = {
  id: {
    notFound: 'Catatan tidak ditemukan.'
  },
  en: {
    notFound: 'Not Found.'
  }
}

const archivePage = {
  id: {
    header: 'Catatan Arsip'
  },
  en: {
    header: 'Archived Notes'
  }
}

const content = {
  appPage,
  loginPage,
  registerPage,
  notePage,
  notesNewPage,
  notesIdPage,
  archivePage
}

export {
  appPage,
  loginPage,
  registerPage,
  notePage,
  notesNewPage,
  notesIdPage,
  archivePage
}

export default content
