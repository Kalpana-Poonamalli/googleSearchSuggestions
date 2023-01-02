// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, updateSearchByArrow} = props
  const {suggestion} = eachItem
  const onArrowClick = () => {
    updateSearchByArrow(suggestion)
  }

  return (
    <li className="si-container">
      <p className="si-para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="si-img"
        onClick={onArrowClick}
      />
    </li>
  )
}

export default SuggestionItem
