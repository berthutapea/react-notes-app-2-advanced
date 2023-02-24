import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../../../utils'

function NoteItemTimestamp({ timestamp }) {
  return (
    <p className="note-item__createdAt">
      { showFormattedDate(timestamp) }
    </p>
  )
}

NoteItemTimestamp.propTypes = {
  timestamp: PropTypes.string.isRequired
}

export default NoteItemTimestamp
