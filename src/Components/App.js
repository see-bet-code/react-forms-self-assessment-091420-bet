import React from 'react'

import Filters from './Filters'
import CharacterIndex from '../Containers/CharacterIndex'
import { getAll, getByShow } from '../data/characters'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: getAll(),
    }
  }

  handleFilter = (show) => {
    if (show !== 'all') {
      this.setState({characters: getByShow(show)})
    } else {
      this.setState({characters: getAll()})
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
              <Filters handleFilter={this.handleFilter}/>
            </div>
            <div className="twelve wide column">
              <CharacterIndex characters={this.state.characters}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

