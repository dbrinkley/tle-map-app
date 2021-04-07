import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ExhibitorApi from './ExhibitorApi/ExhibitorApi'

export default function Rectangle (props) {

  //TODO: style tooltip differently for 'Booth Available'

  const vendorInfo = ExhibitorApi.getExhibitor(props.vendorId);
  const text = vendorInfo !== null ? vendorInfo.company_name + " - " + vendorInfo.block_name : "Booth Available";
  const vendorName = vendorInfo !== null ? vendorInfo.company_name : "";
  const selectedClass = props.selectedBooth === parseInt(props.booth) ? "Map_selectedBooth" : "";
  // const selectedClass = "";

  if(vendorInfo !== null){
    return (
      <OverlayTrigger overlay={
        <Tooltip>
          {text}
        </Tooltip>}>
        <g textAnchor="middle" id={props.vendorId}>
        <rect x={props.x} y={props.y} className={selectedClass + " booth arenaBooth"} width={props.width} height={props.height} data-booth={props.booth} data-vendorid={props.vendorId} onClick={props.handleBoothClick}  />
        <text className="boothText-Name" x={props.textX +  + (props.width / 2)} y={props.textY + (props.height / 2)}>{vendorName}</text>
        <text className="boothText-Number" x={props.textX + (props.width / 2)} y={props.textY + props.height - 2}>{props.booth}</text>
          
        </g>
      </OverlayTrigger>    
    )
  } else {
    return (
      <OverlayTrigger overlay={
        <Tooltip>
          {text}
        </Tooltip>}>
        <g>
          <text className="arenaBoothText" x={props.textX} y={props.textY}>{props.booth}</text>
          <rect x={props.x} y={props.y} className={selectedClass + "booth arenaBooth"} width={props.width} height={props.height} data-booth={props.booth} data-vendorid={props.venId} onClick={props.handleBoothClick} />
        </g>
      </OverlayTrigger>
    )
  }


}
