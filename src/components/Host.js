import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  return(
    <Card
      className={props.isSelected? "host selected":"host"}
      onClick={()=>props.showHostInfo({...props.hostInfo})}
      image={props.hostInfo.imageUrl}
      raised
    />
  )
}

export default Host
