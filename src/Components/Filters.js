import React from 'react'

export default class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Character show</h3>
        <div className="field">
          <select name="show" id="show">
            <option value="all">All</option>
            <option value="DBZ">DBZ</option>
            <option value="My Hero">My Hero</option>
            <option value="Bleach">Bleach</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button">Find characters</button>
        </div>
      </div>
    )
  }
}

