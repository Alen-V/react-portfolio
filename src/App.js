import Particles from 'react-particles-js';
import React, { Component } from 'react'
import './App.css';
import Header from './components/AboutInfo/Header.jsx';
import Container from './components/Body/Container.jsx';
import $ from 'jquery'; 

$(document).ready(function() {
  $('.skills-container div').mouseenter(function() {
    $(this).prevAll().addClass('move-left')
  })
  $('.skills-container div').mouseleave(function() {
      $(this).prevAll().removeClass('move-left')
  })
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      activePage: 0
    }
  }
  changePage = (page) => {
    this.setState({
      activePage: page
    })
  }
  render() {
    const { width, activePage } = this.state
    console.log(width)
    return (
      <div className="App">
        {width > 992 ? <Particles 
              className="canvas-container"
              params={{
                "particles": {
                  "number": {
                    "value": 100,
                    "density": {
                      "enable": true,
                      "value_area": 500
                    }
                  },
                  "color": {
                    "value": "#08FDD8"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 35,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#08FDD8",
                    "opacity": 0.3,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": ["bubble", "grab"]
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 150,
                      "line_linked": {
                        "opacity": 0.8
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 10,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 2
                    },
                    "repulse": {
                      "distance": 100,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
            /> : null}
      <Header width={width} activePage={activePage} changePage={this.changePage}/>
      <Container width={width} activePage={activePage}/>
    </div>
  );
 }
}

export default App;
