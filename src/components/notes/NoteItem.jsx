import React from 'react'
import PropTypes from 'prop-types'
import NoteItemTitle from './note-item/NoteItemTitle'
import NoteItemTimestamp from './note-item/NoteItemTimestamp'
import NoteItemBody from './note-item/NoteItemBody'

function NoteItem({ note }) {
  return (
    <article className="note-item">
      <NoteItemTitle
        id={note.id}
        title={note.title}
      />
      <NoteItemTimestamp
        timestamp={note.createdAt}
      />
      <NoteItemBody
        body={note.body}
      />
    </article>
  )
}

NoteItem.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default NoteItem
