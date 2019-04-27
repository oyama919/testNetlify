import React from "react"
import Words from "../constants/words"
import styles from "./wordList.module.css"

export default () => (
  <ul className={styles.wordList}>
    { Words.map(
      w => {
        return <li className={styles.wordList_item} 
          key={w.key}>{w.key}. {w.word} :  {w.meaning}
          {/* <audio src={w.audio} controls>オーディオタグに対応していません</audio> */}
        </li>
    })}
  </ul>
)

