import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area';

class WestworldMap extends React.Component{

  hotHostsInArea = (areaName) => {
    this.props.hotHosts.filter(host=>host.area===areaName)
  }

  render(){
    return (
      <Segment id="map" >
        {this.props.areas.map(area=>{
          return(
            <Area
              areaInfo={area}
              hotHostsInArea={this.props.hotHosts.filter(host=>host.area===area.name)}
              showHostInfo={this.props.showHostInfo}
              selectedHost={this.props.selectedHost}
            />
          )
        })}
      </Segment>
    )
  }
}

export default WestworldMap
