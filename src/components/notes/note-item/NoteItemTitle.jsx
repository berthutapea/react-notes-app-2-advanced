import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function NoteItemTitle({ id, title }) {
  return (
    <h3 className="note-item__title">
      <Link
        to={`/notes/${id}`}
        title={title}
      >
        { title }
      </Link>
    </h3>
  )
}

NoteItemTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default NoteItemTitle
