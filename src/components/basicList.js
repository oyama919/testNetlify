import React from "react"

export default props => (
  <ul>
    {props.words.map((w, i) => <li key={i} tabIndex="0">{w}</li>)}
  </ul>
)
