import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details';
import ColdStorage from './ColdStorage';
import HostInfo from './HostInfo';
import LogPanel from './LogPanel';


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage
          coldHosts={this.props.coldHosts}
          selectedHost={this.props.selectedHost}
          showHostInfo={this.props.showHostInfo}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          {!!this.props.selectedHost?
            <HostInfo
            selectedHost={this.props.selectedHost}
            areas={this.props.areas}
            toggleHostActive={this.props.toggleHostActive}
            changeHostArea={this.props.changeHostArea}
            logInfo={this.props.logInfo}
            /> :
            <Details />}
        </Grid.Column>
        <Grid.Column width={3}>
          <LogPanel
            toggleActiveAll={this.props.toggleActiveAll}
            allActive={this.props.allActive}
            logInfo={this.props.logInfo}
            logs={this.props.logs}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
