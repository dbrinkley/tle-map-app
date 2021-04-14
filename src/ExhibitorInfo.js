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

  displayViewMore(exhibitorProfile){
    let first, second;
    const readMore = exhibitorProfile.length > 750;

    if(readMore){
      first = exhibitorProfile.slice(0,750);
      second = exhibitorProfile.slice(750);
    } else {
      first = exhibitorProfile;
      second = '';
    }

    return readMore
      ? (
        <p className="ExhibitorInfo_companyProfile">
          {first}
          <span id="ExhibitorInfo_ReadMore_Dots">...  </span>
          <span id="ExhibitorInfo_ReadMore_More">
            {second}
          </span>
          <button onClick={this.handleViewMore} id="ExhibitorInfo_ReadMore_Btn">Read more</button>
        </p>
      ) 
      : (
        <p className="ExhibitorInfo_companyProfile">
          {first}
        </p>
      )
  }

  handleViewMore(){
    var dots = document.getElementById("ExhibitorInfo_ReadMore_Dots");
    var moreText = document.getElementById("ExhibitorInfo_ReadMore_More");
    var btnText = document.getElementById("ExhibitorInfo_ReadMore_Btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  // handleViewMore
/* <span id="dots">...</span><span id="more"></span> */
// https://www.w3schools.com/howto/howto_js_read_more.asp

  render() {
    const exhibitor = this.props.exhibitObj;

    // let profile = exhibitor.profile.length > 750
    //   ? exhibitor.profile.slice(0, 750) + '<span id="ExhibitorInfo_dots">...</span><span id="ExhibitorInfo_More">' + exhibitor.profile.slice(750) + '</span>'
    //   : exhibitor.profile;
   
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
        {this.displayViewMore(exhibitor.profile)}
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
