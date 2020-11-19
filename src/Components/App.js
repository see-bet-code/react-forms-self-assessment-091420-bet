import React from 'react'

import Filters from './Filters'
import NewCharacterForm from './NewCharacterForm'
import './App.css';

import CharacterIndex from '../Containers/CharacterIndex'

import { getAll, getByShow } from '../data/characters'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: getAll(),
      totalCharacters: getAll()
    }
  }

  handleNameFilter = (name) => {
    if (name !== "") {
      const newCharacters = [...this.state.totalCharacters].filter(character => character.name.startsWith(name))
      this.setState({characters: newCharacters})
    } else {
      this.setState({characters: this.state.totalCharacters})
    }

  }

  handleShowFilter = (show) => {
    if (show !== 'all') {
      this.setState({characters: getByShow(show)})
    } else {
      this.setState({characters: this.state.totalCharacters})
    }

  }

  handleForm = (char) => {
    const newList = [...this.state.totalCharacters, char]
    this.setState({totalCharacters: newList, characters: newList})
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
              <NewCharacterForm handleForm={this.handleForm}/>
              <br></br>
              <Filters handleShowFilter={this.handleShowFilter} handleNameFilter={this.handleNameFilter}/>
              <br></br>
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

