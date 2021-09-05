import React, { Component } from 'react'
import './App.css';
import SidebarLeft from './components/AboutInfo/SidebarLeft.jsx';
import SidebarRight from './components/AboutInfo/SidebarRight.jsx';
import Container from './components/Body/Container.jsx';
import LinearWithValueLabel from './components/loader/LoaderBar.jsx'

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
      rightSideBarOpen: window.innerWidth < 992 ? false : true,
      leftSideBarOpen: window.innerWidth < 992 ? false : true,
      view: window.innerWidth < 992 ? 'mobile' : 'desktop'
    }
  }
  
  changePage = (page) => {
    this.setState({
      activePage: page
    })
  }
  openLeftSideBar = () => {
    const { leftSideBarOpen } = this.state
    this.setState({leftSideBarOpen: !leftSideBarOpen})
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
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight, loading: true });
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
        <SidebarLeft width={width} activePage={activePage} leftSideBarOpen={leftSideBarOpen} openLeftSideBar={this.openLeftSideBar} />
        <Container width={width} activePage={activePage} rightSideBarOpen={rightSideBarOpen} />
        <SidebarRight width={width} activePage={activePage} rightSideBarOpen={rightSideBarOpen} changePage={this.changePage} openRightSideBar={this.openRightSideBar} />
      </div>
  );
 }
}

export default App;
