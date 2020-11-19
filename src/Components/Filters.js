import React from 'react'

export default class Filters extends React.Component {

  state = {
    show: "all"
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleFilter(this.state.show)
  }

  render() {
    return (
      <form className="ui form" onClick={this.handleSubmit}>
        <h3>Character show</h3>
        <div className="field">
          <select name="show" id="show" onChange={this.handleChange}>
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

