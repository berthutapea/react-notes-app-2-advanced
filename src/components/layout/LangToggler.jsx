import React, { useContext } from 'react'
import { MdGTranslate } from 'react-icons/md'
import LocaleContext from '../../contexts/LocaleContext'

export default function LangToggler() {
  const { locale, toggleLocale } = useContext(LocaleContext)

  return (
    <button
      type="button"
      title={locale === 'id' ? 'Indonesia' : 'English'}
      className="toggle-locale"
      onClick={toggleLocale}
    >
      <MdGTranslate />
    </button>
  )
}
