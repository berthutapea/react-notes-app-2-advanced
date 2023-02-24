import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { HiOutlineTrash } from 'react-icons/hi'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import PageAction from '../layout/PageAction'
import useLanguage from '../../hooks/useLanguage'

function NotesIdPageAction({
  archived, handleArchive, handleDelete
}) {
  const text = useLanguage('app')

  return (
    <PageAction page="detail-page">
      <>
        <button
          className="action"
          type="button"
          title={archived ? text.active : text.archive}
          onClick={() => handleArchive()}
        >
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button
          className="action"
          type="button"
          title={text.delete}
          onClick={() => handleDelete()}
        >
          <HiOutlineTrash />
        </button>
      </>
    </PageAction>
  )
}

NotesIdPageAction.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default NotesIdPageAction
