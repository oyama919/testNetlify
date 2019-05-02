import React from "react"

export default props => (
  <ul style={{ background: `#fcfcfa`, margin: 0, cursor: `pointer`}}>
    {props.words.map((w, i) => <li key={i} tabIndex="0">{w}</li>)}
  </ul>
)
