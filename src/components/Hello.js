import React, { Component } from 'react'    // import from react package

class Hello extends Component {
  render () {
    return (
      <div>Welcome {this.props.firstName} {this.props.lastName}</div>
    )
  }
}

export default Hello
