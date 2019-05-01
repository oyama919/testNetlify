import React from "react"
import Words from "../constants/words"
import styles from "./wordCardList.module.css"

class WordCardList extends React.Component {
  constructor() {
    super();
    this.wordsShuffle();
    this.state = {
      count: 0,
      translationDisplay: 'none'
  }
  }
  wordsShuffle() {
    for (var i = Words.length - 1; i >= 0; i--) {
      var rand = Math.floor(Math.random() * (i + 1));
      [Words[i], Words[rand]] = [Words[rand], Words[i]]
    }
  }
  countUP() {
    if (this.state.count + 1 === Words.length) {
      return false;
    }
    this.setState({
      count: this.state.count + 1,
      translationDisplay: 'none'
    });
  }

  countDown() {
    if (this.state.count === 0) {
      return false;
    }
    this.setState({
      count: this.state.count - 1,
      translationDisplay: 'none'
    });
  }
  translationShow() {
    this.setState({
      translationDisplay: 'block'
    });
  }

  render() {
    return (
      <div className={styles.wordCardList}>
        <div className={styles.wordCardList_word}>
          <p>{Words[this.state.count].word}</p>
        </div>
        <div className={styles.wordCardList_translation} style={{ display: this.state.translationDisplay }}>
          <p className={styles.wordCardList_translation_meaning}>{Words[this.state.count].meaning}</p>
          <p className={styles.wordCardList_translation_key}>{Words[this.state.count].key}</p>
        </div>
      <div className={styles.wordCardList_buttons}>
        <button className={styles.wordCardList_buttons_answer} onClick={this.translationShow.bind(this)}>答え表示</button>
        <button className={styles.wordCardList_buttons_back} onClick={this.countDown.bind(this)}>&lt; Back</button>
        <button className={styles.wordCardList_buttons_next} onClick={this.countUP.bind(this)}>Next &gt;</button>
      </div>
      </div>
    );
  }
}
export default WordCardList;