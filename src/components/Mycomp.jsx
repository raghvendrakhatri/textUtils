import React from 'react'

const Mycomp = (props) => {
  return (
    <option value={props.obj}>{props.item}</option>
  )
}

export default Mycomp