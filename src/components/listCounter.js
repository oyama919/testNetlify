import React from "react"
import styles from "./listCounter.module.css"

export default props => (
  <section>
    <h2 className={styles.listCounter_title}>{props.title}</h2>
    <span>{props.length}</span>
    <div className={styles.listCounter_contents}>
      {props.children}
    </div>
  </section>
)
