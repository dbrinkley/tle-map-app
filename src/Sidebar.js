import React from 'react'
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faExpand, faPrint, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar (props) {


  const handleClick = () => {
    props.sidebarheaderClick();
  }

  const handleZoomIn = () => {
    props.sidebarZoomIn();
  }

  const handleZoomOut = () => {
    props.sidebarZoomOut();
  }

  const handleFitToScreen = () => {
    props.sidebarFitToScreen();
  }

  return (
    <div id="sidebar" style={{width: props.openClose ? "160px" : "40px"}}>
      <div id="sideBarHeader" onClick={handleClick}>
        {props.openClose ? "<<" : ">>"}
      </div>
      <p id="sideBar_ZoomIn" className={props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faPlus} onClick={handleZoomIn}/> <span>Zoom In</span></p>
      <p id="sideBar_ZoomOut" className={props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faMinus} onClick={handleZoomOut}/> <span>Zoom Out</span></p>
      <p id="sideBar_ScaleToFit" className={props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faExpand} onClick={handleFitToScreen}/> <span>Fit To Screen</span></p>
      {/* <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faPrint} /> <span>Print Screen</span></p> */}
      {/* <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faChalkboardTeacher} /> <span>Fit To Screen</span></p> */}
      {/* <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faUtensils} /> <span>Food</span></p> */}
    </div>
  )
}

