import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';
import { Log } from './services/Log'


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    allHosts:[],
    areas:[],
    selectedHost:undefined,
    allActive:false,
    logs:[]
  }

  componentDidMount(){
    fetch("http://localhost:4000/hosts")
      .then(res=>res.json())
      .then(data=>this.setState({
        allHosts:[...data]
      }))

    fetch("http://localhost:4000/areas")
      .then(res => res.json())
      .then(data => this.setState({
        areas:[...data]
      }))
  }

  coldHosts = () => {
    return(this.state.allHosts.filter(host=>!host.active))
  }

  hotHosts = () => {
    return(this.state.allHosts.filter(host=>host.active))
  }

  showHostInfo = (hostPicked) =>{
    this.setState(
      {selectedHost:{...hostPicked}}
    )
  }

  updateHostsInfo = () => {
    !!this.state.selectedHost&&this.setState({
      selectedHost:this.state.allHosts.find(host=>host.id===this.state.selectedHost.id)
    })
  }

  toggleHostActive = (hostId) => {
    const newAllHosts = this.state.allHosts.map((host)=>{
      if (host.id === hostId) {
        return {...host, active:!host.active}
      }
      return host
    })

    this.setState({
      allHosts:[...newAllHosts]
    }, this.updateHostsInfo)
  }

  changeHostArea = (hostId,areaName) =>{
    const newAllHosts = this.state.allHosts.map((host)=>{
      if (host.id === hostId) {
        return {...host, area:areaName}
      }
      return host
    })

    this.setState({
      allHosts:[...newAllHosts]
    }, this.updateHostsInfo)
  }

  toggleActiveAll = () => {
    const newAllHosts = this.state.allHosts.map(host=>{return({...host, active:!this.state.allActive})})
    const logMessage = this.state.allActive? Log.warn(`Decomissioning all hosts`) : Log.warn(`Activating all hosts`)

    this.setState({
      allHosts:[...newAllHosts],
      allActive:!this.state.allActive,
      logs:this.state.logs.concat(logMessage)
    }, this.updateHostsInfo)
  }

  logInfo = (logMessage) => {
    this.setState({
      logs:[logMessage].concat(this.state.logs)
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap
          hotHosts={this.hotHosts()}
          selectedHost={this.state.selectedHost}
          areas={this.state.areas}
          showHostInfo={this.showHostInfo}
        />
        <Headquarters
          coldHosts={this.coldHosts()}
          selectedHost={this.state.selectedHost}
          areas={this.state.areas}
          showHostInfo={this.showHostInfo}
          toggleHostActive={this.toggleHostActive}
          changeHostArea={this.changeHostArea}
          toggleActiveAll={this.toggleActiveAll}
          allActive={this.state.allActive}
          logInfo={this.logInfo}
          logs={this.state.logs}
        />
      </Segment>
    )
  }
}

export default App;
