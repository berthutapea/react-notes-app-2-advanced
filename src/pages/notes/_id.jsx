import React, { useEffect, useState } from 'react'
import parser from 'html-react-parser'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import { showFormattedDate } from '../../utils'
import {
  archiveNote, deleteNote, getNote, unarchiveNote
} from '../../utils/network-data'
import NotesIdPageAction from '../../components/notes/NotesIdPageAction'
import NotFoundMessage from '../../components/layout/NotFoundMessage'
import LoadingIndicator from '../../components/layout/LoadingIndicator'
import useLanguage from '../../hooks/useLanguage'

export default function NotesIdPages() {
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState({})
  const { id } = useParams()
  const textApp = useLanguage('app')
  const textNote = useLanguage('notesId')
  const navigate = useNavigate()

  const handleArchive = () => {
    if (confirm(textApp.msg.confirm)) {
      let methods = null
      let navigateTo = '/'
      if (note.archived) {
        methods = unarchiveNote(id)
        navigateTo = '/archives'
      } else {
        methods = archiveNote(id)
      }
      methods
        .then((res) => {
          if (!res.error) {
            navigate(navigateTo)
          }
        })
        .catch(() => {
          alert(textApp.msg.error)
        })
    }
  }

  const handleDelete = () => {
    if (confirm(textApp.msg.confirm)) {
      deleteNote(id).then(res => {
        if (!res.error) {
          navigate('/')
        }
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
    }
  }

  useEffect(() => {
    /**
     * show notes
     */
    getNote(id)
      .then((res) => {
        if (!res.error) {
          setNote(res.data)
        } else {
          alert(textNote.notFound)
        }
        setLoading(false)
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
  }, [])

  return (
    <section className="detail-page">
      { ('id' in note && !loading) ? (
        <>
          <Link
            to="/"
            title={textApp.back}
          >
            <HiArrowLeft />
            {' '}
            { textApp.back }
          </Link>
          <h3 className="detail-page__title">
            { note.title }
          </h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <div className="detail-page__body">
            { parser(note.body) }
          </div>
          <NotesIdPageAction
            archived={note.archived || false}
            handleArchive={handleArchive}
            handleDelete={handleDelete}
          />
        </>
      ) : ''}
      {(!('id' in note) && !loading) ? <NotFoundMessage /> : ''}
      {loading ? <LoadingIndicator /> : ''}
    </section>
  )
}
