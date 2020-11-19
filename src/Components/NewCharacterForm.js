import React from "react";

export default class NewCharacterForm extends React.Component {
  constructor() {
    super();

    this.initialstate = {
      name: "",
      img: "", 
      show: ""
    };

    this.state = this.initialstate
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(this.initialstate)
    if (this.state.name === '' || this.state.show === '') {
      window.alert("Name and/or show can't be blank")
      return
    }
    this.props.handleForm(this.state)
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h3>New Character</h3>
        <div className="field">
          <label>
            Name
            <input id="name" name="name" type="text"
              onChange={ this.handleInputChange }
              value={this.state.name}
              />
          </label>
        </div>
        <div className="field">
          <label>
            Show
            <input id="show" name="show" type="text"
              onChange={ this.handleInputChange }
              value={this.state.show}
              />
          </label>
        </div>
        <div className="field">
          <label>
            Image
            <input id="img" name="img" type="text"
              onChange={ this.handleInputChange }
              value={this.state.img}
              />
          </label>
        </div>

        <div classname="field">
          <button className="ui secondary button" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

