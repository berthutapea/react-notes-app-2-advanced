import React from 'react'
import PropTypes from 'prop-types'
import NoteItem from './NoteItem'

function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => <NoteItem key={note.id} note={note} />)}
    </section>
  )
}

NotesList.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired
}

export default NotesList
