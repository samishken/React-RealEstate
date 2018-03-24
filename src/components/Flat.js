import React, { Component } from 'react'
import './Flat.css'

class Flat extends Component {
 
  render () {
    const style = {
      backgroundImage: "url('" + this.props.flat.imageUrl + "')"
  //   backgrounImage: `url('${this.props.flat.imageUrl}')`
  }
    const title = this.props.flat.price + '€' + ' - ' + this.props.flat.name

    return (
      <div className='flat' onClick={this.props.handleClick}>
          <div className='flat-picture' style={style}> </div>
          <div className='flat-title'>{title}</div>
      </div>)
  }
      handleClick = () => {
    //Call the partent method selectFlat
       this.props.selectFlat(this.props.flat)
  }
}

 export default Flat

// component Flat has picture and title
// that's why we have two div's.
// CSS properties in react do not use space like BACKGROUND-IMAGE.
// Instead they use backgroundImage

 