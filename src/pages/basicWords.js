import React from "react"
import Header from "../components/header"
import BasicWords from "../constants/basicWords"
import BasicList from "../components/basicList"
import ListCounter from "../components/listCounter"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="グループ化した動詞" />
    <ListCounter title="Basic Pattern" length={BasicWords.basicWords.length}>
      <BasicList words={BasicWords.basicWords} />
    </ListCounter>
  </div>
)
