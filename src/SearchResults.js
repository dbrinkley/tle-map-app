import React, { Component } from 'react';
import './SearchResults.css';
import {Redirect, Link} from 'react-router-dom';

class SearchResults extends Component {
  
  itemClickHandler = id => {
    this.props.exhibitorClickHandler(id);
  }

  render() {

    const searchResultObj = this.props.searchResults;

    return (
      <div className="SearchResults_container">
        <h2>
          Search Results
          <p className="SearchResults_headerType">
            {this.props.searchOption.charAt(0).toUpperCase() + this.props.searchOption.slice(1)}: {this.props.searchInput.toUpperCase()}
          </p> 
        </h2>
             

        {Object.keys(searchResultObj).map((key, index) => {
          return (
            <div className="SearchResults_itemContainer" key={`${searchResultObj[key].vendor_id}-SR`}>
              <div className="col-lg-12 SearchResults_itemHeader">
                <p>Exhibitor</p>
              </div>
              <Link to={`/exhibitors/${searchResultObj[key].vendor_id}`}>
                <div className="SearchResults_item">
                {/* <div className="SearchResults_item" onClick={() => this.itemClickHandler(searchResultObj[key].vendor_id)}> */}
                  <div className="col-md-12">
                    <p className="SearchResults_itemName">{searchResultObj[key].company_name}</p>
                    <p>Booth: {searchResultObj[key].block_name}</p>
                  </div>
                  {/* <div className="col-lg-3 col-lg-offset-1 col-md-4">
                    <img src={`https://landscapearchitect.com/products/images/${searchResultObj[key].logo}`} alt={searchResultObj[key].company_name} className="SearchResults_itemImage"></img>
                  </div> */}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SearchResults
