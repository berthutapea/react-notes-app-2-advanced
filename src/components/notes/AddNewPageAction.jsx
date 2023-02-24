import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import PageAction from '../layout/PageAction'
import useLanguage from '../../hooks/useLanguage'

function AddNewPageAction({ handleSave }) {
  const text = useLanguage('app')
  const navigate = useNavigate()

  return (
    <PageAction page="add-new-page">
      <>
        <button
          className="action"
          type="button"
          title={text.cancel}
          onClick={() => navigate('/')}
        >
          <HiX />
        </button>
        <button
          className="action"
          type="button"
          title={text.add}
          onClick={() => handleSave()}
        >
          <HiCheck />
        </button>
      </>
    </PageAction>
  )
}

AddNewPageAction.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default AddNewPageAction
