import React from 'react';
import '../stylesheets/Area.css';
import HostList from './HostList'


const Area = (props) => {
  return(
    <div className='area' id={props.areaInfo.name}>
      <h3 className='labels'>{props.areaInfo.name.split('_').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ')}</h3>
      <HostList
        hostsToRender={props.hotHostsInArea}
        showHostInfo={props.showHostInfo}
        selectedHost={props.selectedHost}
      />
    </div>
  )
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
