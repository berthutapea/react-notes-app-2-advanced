import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'
import PageAction from '../layout/PageAction'

export default function HomePageAction() {
  const text = useLanguage('app')
  const navigate = useNavigate()

  return (
    <PageAction page="homepage">
      <button
        className="action"
        type="button"
        title={text.add}
        onClick={() => navigate('/notes/new')}
      >
        <HiPlus />
      </button>
    </PageAction>
  )
}
