import React, { Component } from 'react'
import ExhibitorObj from './ExhibitorObj';
import './ExhibitorList.css';
import {Link} from 'react-router-dom';

class ExhibitorList extends Component {

  handleClick = vendorId => {
    this.props.exhibitorClick(vendorId);
  }


  render() {
    return (
      <div className="ExhibitorList_container">
        <h2>
        The Landscape Expo 2020 Exhibitor List
        </h2>
        {Object.keys(ExhibitorObj).map((key, index) => {
          return (
            <Link to={`/exhibitors/${ExhibitorObj[key].vendor_id}`} key={`${ExhibitorObj[key].vendor_id}-link`}>
              <div className="ExhibitorList_Item row" key={ExhibitorObj[key].vendor_id} onClick={() => this.handleClick(ExhibitorObj[key].block_name)}>
              <img src={`https://landscapearchitect.com/products/images/${ExhibitorObj[key].logo}`} alt={ExhibitorObj[key].company_name} className="col-lg-5"></img>
                <div className="col-lg-7">
                  <p>{ExhibitorObj[key].company_name}</p>
                  <p>Booth: {ExhibitorObj[key].block_name}</p>
                </div> 
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default ExhibitorList
