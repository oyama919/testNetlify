import React from "react"
import Header from "../components/header"
import BasicList from "../components/basicList"
import BasicWords from "../constants/basicWords"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="4つの時制" />
    <section>
      <h2>普段のこと・習慣</h2>
      <BasicList words={BasicWords.usualWords} />
    </section>
    <section>
      <h2>今している最中・一時的なこと</h2>
      <BasicList words={BasicWords.progressWords} />
    </section>
    <section>
      <h2>過去</h2>
      <BasicList words={BasicWords.pastWords} />
    </section>
    <section>
      <h2>未来</h2>
      <BasicList words={BasicWords.futureWords} />
    </section>
  </div>
)
