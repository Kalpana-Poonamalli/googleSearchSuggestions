// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputChange = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  updateSearchByArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="gs-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="gs-img"
        />
        <div className="gs-inner-container">
          <div className="gs-input-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="gs-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="gs-input"
              value={searchInput}
              onChange={this.onInputChange}
            />
          </div>
          <ul className="gs-items">
            {filteredList.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
                updateSearchByArrow={this.updateSearchByArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
