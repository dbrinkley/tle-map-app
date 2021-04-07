import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


export default function Path(props) {

  //TODO: style tooltip differently for 'Booth Available'

  const text = props.compName.length > 0 ? props.compName : 'Booth Available';

  return (
   
      <OverlayTrigger overlay={
        <Tooltip>
          {text}
        </Tooltip>}>
        <g>
          <text className="arenaBoothText" x={props.textX} y={props.textY}>{props.booth}</text>
          <path className="booth arenaBooth" d={props.d} id={props.booth} data-booth={props.booth} data-venid={props.venId} onClick={props.handleBoothClick}  />
        </g>
      </OverlayTrigger>
    
          
  )
}

