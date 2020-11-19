import React from 'react'

export default class Character extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content" >
          <a className="header">
            {this.props.char.name}
          </a>
          <div className="description">
            {/* <p>Age: PET AGE</p> */}
            <p>{this.props.char.show}</p>
            {/* <p>Weight: PET WEIGHT</p> */}
          </div>
          <img alt="character-image" src={this.props.char.img}
              width="200" height="90%">
          {/* className="meta"  */}
            {/* <span className="date">PET TYPE</span> */}
          </img>
          
        </div>
        {/* <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div> */}
      </div>
    )
  }
}
