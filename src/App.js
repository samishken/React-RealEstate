import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
// import logo from './logo.svg';
import Flat from './components/Flat'
import Marker from './components/Marker'
import './App.css'



class App extends Component {
  // const flats = [ flat, flat, flat, flat ]
  constructor (props) {
    super(props)
    this.state = {
      flats: [],  //flats start from [] empty array
      allFlats: [],
      selectedFlat: null,  // selectedFlat start from nothing
      search: ''
    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          allFlats: data,
          flats: data,
          selectedFlat: data[5]
        })
      })
  }

  selectFlat = (flat) => {
    console.log(flat)
    this.setState({
      selectedFlat: flat
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    })
  }

  render () {
    let center = {
      lat: 48.8566, lng: 2.3522
    }
    //when we click on the flat we want action on the map
    if(this.state.selectedFlat) {
      center = { lat: this.state.selectedFlat.lat, lng: this.state.selectedFlat.lng }
    }

    return (
      <div className='app'>
        <div className='main'>
         <div className="search">
            <input type="text" placeholder="Search..." value={this.state.search}
              onChange={this.handleSearch} />
          </div>
          <div className='flats'>
            {this.state.flats.map((flat) => {
                  return <Flat key={flat.name} flat={flat} selectFlat={this.selectFlat} />
                })}
          </div>
        </div>
        <div className='map'>
            <GoogleMapReact
              center={center}
              // getting map closer to center increase the below number in ZOOM
              zoom={15}>
              {this.state.flats.map((flat) => { return <Marker 
                  key={flat.name} lat={flat.lat} 
                  lng={flat.lng} text={flat.price} 
                  selected={flat === this.state.selectedFlat}
                  />
                })}
            </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default App
