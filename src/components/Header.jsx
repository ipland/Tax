import React from 'react'

import './Header.scss'

function Header({ titles, weights }) {
  function clsTitle(key) {
    return `col-xs-${weights[key]} col-md-${weights[key]} col-lg-${weights[key]} header__title`
  }

  return (
    <ol className="row header__title-list">
      {
        titles.map((title, key) => (
          <li className={clsTitle(key)} key={key}>{title}</li>
        ))
      }
    </ol>
  )
}

export default Header
