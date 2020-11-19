import React from 'react'

import Character from './Character'
import { getAll } from '../data/characters'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
      { getAll().map(char=> <Character char={char}/>) }
      </div>
    )
  }
}

export default PetBrowser
