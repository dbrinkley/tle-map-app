import React, { Component } from "react";
import "./ExhibitorContact.css";
import axios from "axios";

class ExhibitorContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      company: "",
      message: ""
    };

    this.handleContactSubmit = this.handleContactSubmit.bind(this);
  }

  myChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleContactSubmit(event) {
    event.preventDefault();

    axios
      .post(
        `https://thelandscapeexpo.com/Scripts/mailback-contactVendor-tleMapApp.php`,
        {
          fName: this.state.fName,
          lName: this.state.lName,
          email: this.state.email,
          company: this.state.company,
          message: this.state.message
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    const exhibitor = this.props.exhibitObj;

    return (
      <div className="ExhibitorContact_container">
        <h2>{exhibitor.company_name}</h2>
        <p>Contact {exhibitor.company_name}</p>
        <form onSubmit={this.handleContactSubmit}>
          <input
            placeholder="First Name"
            type="text"
            name="fName"
            onChange={this.myChangeHandler}
          ></input>
          <input
            placeholder="Last Name"
            type="text"
            name="lName"
            onChange={this.myChangeHandler}
          ></input>
          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={this.myChangeHandler}
          ></input>
          <input
            placeholder="Company"
            type="text"
            name="company"
            onChange={this.myChangeHandler}
          ></input>
          <textarea
            placeholder="Message"
            name="message"
            onChange={this.myChangeHandler}
          ></textarea>
          <button type="submit" className="btn_style">
            Contact Company
          </button>
        </form>
      </div>
    );
  }
}

export default ExhibitorContact;
