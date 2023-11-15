import React from 'react'

function Btn(props) {
  return (
    // <div className="flex items-center justify-center mt-96">
    <div className={props.className}>
        {/* <button className="btn">{props.name}</button> */}
        <button className={props.btnClassName}>{props.name}</button>
      </div>
  )
}

export default Btn