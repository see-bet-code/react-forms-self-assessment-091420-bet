import React from 'react'

import Filters from './Filters'
import CharacterIndex from './CharacterIndex'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      filters: {
        type: 'all'
      }
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header"></h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <CharacterIndex/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

