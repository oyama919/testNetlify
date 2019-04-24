import React from "react"
import Links from "./links"

export default props => (
  <header>
    <h1>{props.headerText}</h1>
    <Links />
  </header>
)
