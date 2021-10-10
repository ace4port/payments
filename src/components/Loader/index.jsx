import React from 'react'
import './styles.scss'

const Loader = ({ type }) => {
  if (type === 'error') {
    return (
      <div className="box" style={{ color: '#000' }}>
        <span className="loader-16"></span>
      </div>
    )
  }
  return (
    <div className="box">
      <span className="loader-07"></span>
    </div>
  )
}

export default Loader
