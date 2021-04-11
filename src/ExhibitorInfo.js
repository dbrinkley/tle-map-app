import React, { Component } from 'react'
import './ExhibitorInfo.css';
import {Link} from 'react-router-dom';

class ExhibitorInfo extends Component {
  constructor(props) {
    super(props)
    this.handleProductClick = this.handleProductClick.bind(this);
  }
  
  handleProductClick(){
    window.open("https://thelandscapeexpo.com/landscape-design-products/featherock-inc/12890", "_blank")
  }


  // handleViewMore
/* <span id="dots">...</span><span id="more"></span> */
// https://www.w3schools.com/howto/howto_js_read_more.asp

  render() {
    const exhibitor = this.props.exhibitObj;
   
    return (
      <div className="ExhibitorInfo_container">
        <h2>{exhibitor.company_name}</h2>
        <img src={`https://landscapearchitect.com/products/images/${exhibitor.logo}`} alt={exhibitor.company_name} className="col-lg-8 ExhibitorInfo_logo"></img>
        <p className="ExhibitorInfo_companyInfo">
          {exhibitor.address}<br />
          {exhibitor.city}, {exhibitor.state} {exhibitor.zip}<br />
          {exhibitor.phone}<br />
          Fax: {exhibitor.fax}<br />
          <a href="fillerWebsite.com" target="_blank">fillerWebsite.com</a>
        </p>
        <p className="ExhibitorInfo_companyProfile">
          {exhibitor.profile}
        </p>
        <div className="ExhibitorInfo_buttonContainer">
          <button className="btn_style" onClick={this.handleProductClick}>View Products</button>
          <Link to={`/exhibitors/contact/${exhibitor.vendor_id}`}>
            <button className="btn_style">Contact Company</button>
          </Link>
        </div>
        
      </div>
    )
  }
}

export default ExhibitorInfo
