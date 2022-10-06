import { useState } from "react"
import TopicSearch from "./TopicSearch.jsx"

export const TopicCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  //#region
  const H1_STYLE = {
    cursor: 'pointer',
    padding: '.5em',
    fontSize: '1em',
    border: '1px solid #d1cfcf',
  }

  const SPAN_STYLES = {
    backgroundColor: 'gray',
    fontSize: '.75em',
    margin: '.2em',
    padding: '.5em .3em',
    borderRadius: '50%',
    color: 'white'
  }
  //#endregion

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h1 style={H1_STYLE} onClick={handleOpen}>
        {data.name}
        <span style={SPAN_STYLES}>{data.stargazerCount}</span>
      </h1>
      <div style={{ paddingLeft: "3rem" }}>
        {isOpen && <TopicSearch value={data.name} />}
      </div>
    </div>
  )
}
export default TopicCard
