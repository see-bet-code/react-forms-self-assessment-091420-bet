import React from 'react'

import Character from '../Components/Character'

export default class CharacterIndex extends React.Component {
  render() {
    return (
      <div className="ui cards">
      { this.props.characters.map(char=> <Character char={char}/>) }
      </div>
    )
  }
}
