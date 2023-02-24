import React from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function NoteListEmpty() {
  const text = useLanguage('note')

  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">{ text.empty }</p>
    </section>
  )
}
