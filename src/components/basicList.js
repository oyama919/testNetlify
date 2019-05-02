import React from "react"
import styles from "./basicList.module.css"

export default props => (
  <ul className={styles.basicList}>
    {props.words.map((w, i) => <li key={i} tabIndex="0">{w}</li>)}
  </ul>
)
