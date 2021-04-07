import React, { Component } from 'react'
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faExpand, faPrint, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'


class Sidebar extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.sidebarheaderClick();
  }

  render() {


    return (
      <div id="sidebar" style={{width: this.props.openClose ? "160px" : "40px"}}>
        <div id="sideBarHeader" onClick={this.handleClick}>
          {this.props.openClose ? "<<" : ">>"}
        </div>
        <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faPlus} /> <span>Zoom In</span></p>
        <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faMinus} /> <span>Zoom Out</span></p>
        <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faExpand} /> <span>Fit To Screen</span></p>
        <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faPrint} /> <span>Print Screen</span></p>
        <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faChalkboardTeacher} /> <span>Fit To Screen</span></p>
        {/* <p className={this.props.openClose ? "sideBarItemShow" : "sideBarItemHide"}><FontAwesomeIcon icon={faUtensils} /> <span>Food</span></p> */}
      </div>
    )
  }
}

export default Sidebar
