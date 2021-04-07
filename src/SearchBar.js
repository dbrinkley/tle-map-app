import React, { Component } from 'react'
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
       searchOption: 'exhibitors',
       searchInput: '',
    }
  }

  searchSubmitHandler = (event) => {
    event.preventDefault();
    this.props.searchFn(this.state);
  }

  searchChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  


  render() {
    return (
      <div className="SearchBar_container col-lg-12">
        <p id="SearchBar_viewWord">View</p>
        <form name="viewForm" id="viewForm">
          <select name="viewOption">
            <option value="exhibitHall">Exhibit hall</option>
            <option value="parkingMap">Parking Map</option>
            <option value="seminarRooms">Seminar Rooms</option>
          </select>
        </form>

        <form name="searchByForm" id="searchByForm" onSubmit={this.searchSubmitHandler}>
          <select name="searchOption" onChange={this.searchChangeHandler}>
            <option value="exhibitors" name="exhibitors">Exhibitor</option>
            <option value="booths" name="booths">Booth</option>
            <option value="keyword" name="keyword">Keyword</option>
            <option value="section" name="section">Section</option>
          </select>
          <input id="searchInput" name="searchInput" onChange={this.searchChangeHandler}></input>
          <button type="submit" id="searchBySubmit">Search</button>
        </form>

      </div>
    )
  }
}

export default SearchBar
