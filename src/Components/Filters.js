import React from 'react'

export default class Filters extends React.Component {

  state = {
    show: "all",
    name: ""
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, 
      () => this.props.handleNameFilter(this.state.name));
    
  }

  handleShowChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleShowFilter(this.state.show)
  }

  render() {
    return (
      <form className="ui form" onClick={this.handleSubmit}>
        <div className="field">
          <br></br>
        <h3>Filter by character name</h3>
          <label>
            Name
            <input id="name" name="name" type="text"
              onChange={ this.handleNameChange }
              value={this.state.name}
              />
          </label>
        </div>
        <br></br>
        <h3>Filter by character show</h3>
        <div className="field">
          <select name="show" id="show" onChange={this.handleShowChange}>
            <option value="all">All</option>
            <option value="DBZ">Dragon Ball Z</option>
            <option value="My Hero">My Hero</option>
            <option value="Bleach">Bleach</option>
            <option value="Pokemon">Pokemon</option>
            <option value="Hunter x Hunter">Hunter x Hunter</option>
            <option value="Naruto">Naruto</option>
            <option value="Avatar">Avatar</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" >Find characters</button>
        </div>
      </form>
    )
  }
}

