import React from 'react'

export default class Character extends React.Component {
  render() {
    return (
      <div className="card character-flex-card">
        <div className="content character-flex-card" >
          <a className="header">
            {this.props.char.name}
          </a>
          <div className="description">
            <p>{this.props.char.show}</p>
          </div>
          <div className="image-div" >
            <img alt="character-image" src={this.props.char.img} />
          </div>
          
        </div>
        <div className="extra content">
          <button className="ui disabled button">Favorite</button>
        </div>
      </div>
    )
  }
}
