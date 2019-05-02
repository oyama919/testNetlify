import React from "react"
import Header from "../components/header"
import BasicWords from "../constants/basicWords"
import BasicList from "../components/basicList"
import ListCounter from "../components/listCounter"

export default () => (
  <div style={{ color: `teal`, margin: `0` }}>
    <Header headerText="4つの時制" />
    <ListCounter title="普段のこと・習慣" length={BasicWords.usualWords.length}>
      <BasicList words={BasicWords.usualWords} />
    </ListCounter>
    <ListCounter title="今している最中・一時的なこと" length={BasicWords.progressWords.length}>
      <BasicList words={BasicWords.progressWords} />
    </ListCounter>
    <ListCounter title="過去" length={BasicWords.pastWords.length}>
      <BasicList words={BasicWords.pastWords} />
    </ListCounter>
    <ListCounter title="未来" length={BasicWords.futureWords.length}>
      <BasicList words={BasicWords.futureWords} />
    </ListCounter>
  </div>
)
