import React, { Component } from 'react'
import './App.css';
import SidebarLeft from './components/AboutInfo/SidebarLeft.jsx';
import SidebarRight from './components/AboutInfo/SidebarRight.jsx';
import Container from './components/Body/Container.jsx';
import LinearWithValueLabel from './components/loader/LoaderBar.jsx'
import axios from 'axios';

const API_PATH = 'https://alenvatic.com/api/index.php';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: 'alen vatic',
      percentage: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      activePage: 0,
      rightSideBarOpen: false,
      leftSideBarOpen: window.innerWidth <= 768 ? false : true,
      view: window.innerWidth <= 768 ? 'mobile' : 'desktop',
      mailSent: false,
      error: null
    }
  }
  handleFormSubmit = (data) => {
    const { mailSent, error } = this.state
    const { fname, email, message } = data
    const dataToSend = {
      fname,
      email,
      message,
      mailSent,
      error
    }
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: dataToSend
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
        alert('Message sent!')
      })
      .catch(error => this.setState({ error: error.message }));
  };
  changePage = (page) => {
    this.setState({
      activePage: page
    })
  }
  openLeftSideBar = () => {
    const { leftSideBarOpen, width } = this.state
    this.setState({
      rightSideBarOpen: width <= 768 ? false : true,
      leftSideBarOpen: !leftSideBarOpen
    })
  }
  openRightSideBar = () => {
    const { rightSideBarOpen, width } = this.state
    this.setState({
      leftSideBarOpen: width <= 768 ? false : true,
      rightSideBarOpen: !rightSideBarOpen
    })
  }
  loadingComplete = () => {
    this.setState({
      loading: false
    })
  }
  updateDimensions = () => {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight, 
      loading: true,
      rightSideBarOpen: false,
      leftSideBarOpen: window.innerWidth <= 768 ? false : true,
      view: window.innerWidth <= 768 ? 'mobile' : 'desktop',
    });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {
    const { loading, width, activePage, rightSideBarOpen, name, view, leftSideBarOpen } = this.state
    return (
      loading ? <div className={'loading-animation'}>
        <div className={'loader-container'}>
          {name}
          <LinearWithValueLabel loadingComplete={this.loadingComplete}/> 
        </div>
      </div>
      : 
      <div className={`App`} id={view}>
        <SidebarLeft width={width} activePage={activePage} leftSideBarOpen={leftSideBarOpen} openLeftSideBar={this.openLeftSideBar} changePage={this.changePage} />
        <Container width={width} activePage={activePage} rightSideBarOpen={rightSideBarOpen} handleFormSubmit={this.handleFormSubmit} changePage={this.changePage} />
        <SidebarRight width={width} activePage={activePage} rightSideBarOpen={rightSideBarOpen} changePage={this.changePage} openRightSideBar={this.openRightSideBar} />
      </div>
  );
 }
}

export default App;
