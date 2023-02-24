import React, { useEffect, useState } from 'react'
import HomepageAction from '../components/index/HomePageAction'
import LoadingIndicator from '../components/layout/LoadingIndicator'
import NoteListEmpty from '../components/notes/NoteListEmpty'
import NotesList from '../components/notes/NotesList'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import { getArchivedNotes } from '../utils/network-data'

export default function ArchivesPage() {
  const [dataNotes, setDataNotes] = useState([]) // all notes from api
  const [initNotes, setInitNotes] = useState(false) // flag sudah ambil notes dari api
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([]) // filtered notes
  const [search, setSearch] = useInput('')
  const text = useLanguage('archive')
  const textNote = useLanguage('note')
  
  /**
   * Inisialisasi data notes dari api
   */
  const initNotesFromApi = () => {
    getArchivedNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data)
          setNotes(res.data)
          setInitNotes(true)
          setLoading(false)
        }
      })
      .catch(() => {
        alert(appPage[locale].msg.error)
      })
  }

  useEffect(() => {
    if (!initNotes) {
      initNotesFromApi()
    }

    /**
     * Jika sudah init notes
     * filter dari memory local
     */
    if (initNotes) {
      let tempDataNotes = [...dataNotes]
      if (search !== '') {
        tempDataNotes = tempDataNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      }
      setNotes(tempDataNotes)
    }
  }, [search])
  return (
    <section className="homepage">
      <h2>{ text.header }</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder={textNote.searchPlaceholder}
          value={search}
          onChange={setSearch}
        />
      </section>
      {(notes.length > 0 && !loading) ? <NotesList notes={notes} /> : ''}
      {(notes.length === 0 && !loading) ? <NoteListEmpty /> : ''}
      {loading ? <LoadingIndicator /> : ''}
      <HomepageAction />
    </section>
  )
}
