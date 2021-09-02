import React, { Component } from 'react'
import './App.css';
import SidebarLeft from './components/AboutInfo/SidebarLeft.jsx';
import SidebarRight from './components/AboutInfo/SidebarRight.jsx';
import Container from './components/Body/Container.jsx';
import LinearWithValueLabel from './components/loader/LoaderBar.jsx'
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
      loading: true,
      name: 'alen vatic',
      percentage: 0,
      width: window.innerWidth,
      activePage: 0,
      rightSideBarOpen: false
    }
    
  }
  changePage = (page) => {
    this.setState({
      activePage: page
    })
  }
  openRightSideBar = () => {
    const { rightSideBarOpen } = this.state
    this.setState({rightSideBarOpen: !rightSideBarOpen})
  }
  loadingComplete = () => {
    this.setState({
      loading: false
    })
  }
  
  render() {
    const { loading, width, activePage, rightSideBarOpen, name } = this.state
    return (
      loading ? <div className={'loading-animation'}>
        <div className={'loader-container'}>
          {name}
          <LinearWithValueLabel loadingComplete={this.loadingComplete}/> 
        </div>
      </div>
      : 
      <div className="App">
        <SidebarLeft width={width} activePage={activePage} changePage={this.changePage}/>
        <Container width={width} activePage={activePage} rightSideBarOpen={rightSideBarOpen} />
        <SidebarRight width={width} activePage={activePage} rightSideBarOpen={rightSideBarOpen} changePage={this.changePage} openRightSideBar={this.openRightSideBar}/>
      </div>
  );
 }
}

export default App;
