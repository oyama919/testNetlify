import React from "react"
import Links from "../constants/links"
import styles from "./linkList.module.css"

export default () => (
  <ul className={styles.linkList}>
    { Links.map((w, i) => {
        return <li  key={i} className={styles.linkList_item}>
          <a href={w.page} className={styles.linkList_item_link}>{w.name}</a>
        </li>
    })}
  </ul>
)
