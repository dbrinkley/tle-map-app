import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Map from './Map';
import './InteractiveMap.css';
import VendorPanel from './VendorPanel';
import Navbar from "./images/navbar-placeholder.jpg";
import { Redirect, History } from "react-router-dom";
import ExhibitorObj from "./ExhibitorObj";



class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOption: '',
      searchInput: '',
      exhibitorId: 0,
      searchRedirect: false,
      selectedBooth: 0
    }
  }



  componentDidUpdate(prevProps, prevState) {
    // if (prevState.searchOption !== this.state.searchOption || prevState.searchInput !== this.state.searchInput) {
    //   this.a = "";
    // }
    if(this.state.searchRedirect === true){
      this.setState({
        searchRedirect: false
      })
    }
  }


  handleSearchInput = (st) => {
    this.setState({
      ...st,
      searchRedirect: true
    })
  }
  

  handleBoothClick = (booth) => {

    console.log('handleBoothClick');

    const vendor = Object.keys(ExhibitorObj)
        .filter( key => ExhibitorObj[key].block_name === booth)
        .reduce( (res, key) => (res[key] = ExhibitorObj[key]), {} );


    if(vendor.hasOwnProperty('vendor_id')){
      this.setState({
        exhibitorId: parseInt(vendor.vendor_id),
        selectedBooth: parseInt(booth)
      })
    } else {
      this.setState({
        exhibitorId: 0,
        selectedBooth: parseInt(booth)
      })
    }
  }

  handleExhibitorClick = booth => {
    this.setState({
      selectedBooth: parseInt(booth)
    });
  }


  setIdAndBooth = (id, booth) => {
    this.setState({
      exhibitorId: parseInt(id),
      selectedBooth: parseInt(booth)
    });
  }
  

  render() {
    if(this.state.searchRedirect === true){
      return <Redirect push to={`/search/${this.state.searchOption}/${this.state.searchInput}`}/>
    }
    
    return (
        <div className="container">
          <div className="row">
            <img src={Navbar} alt="navbar" id="navbar"></img>
            <SearchBar searchFn={this.handleSearchInput} />
            <Map boothClick={this.handleBoothClick} selectedBooth={this.state.selectedBooth}/>
            <VendorPanel searchOption={this.state.searchOption} searchInput={this.state.searchInput} exhibitorId={this.state.exhibitorId} exhibitorClick={this.handleExhibitorClick} setIdAndBooth={this.setIdAndBooth} />
          </div>
        </div>
    )
  }
}

export default InteractiveMap
