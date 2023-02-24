import React from 'react'
import PropTypes from 'prop-types'

function PageAction({ page, children }) {
  return (
    <div className={`${page}__action`}>
      { children }
    </div>
  )
}

PageAction.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default PageAction
