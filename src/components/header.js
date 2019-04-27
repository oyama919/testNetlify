import React from "react"
import Links from "./linkList"
import styles from "./header.module.css"

export default props => (
  <header className={styles.header}>
    <h1 className={styles.header_logo}>{props.headerText}</h1>
    <Links />
  </header>
)
