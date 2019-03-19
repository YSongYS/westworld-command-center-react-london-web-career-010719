import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hostsToRender.map(host=><Host hostInfo={host} showHostInfo={props.showHostInfo} isSelected={!!props.selectedHost && host.id===props.selectedHost.id}/>)}
    </Card.Group>
  )
}

export default HostList
