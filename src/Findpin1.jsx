import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from "./Footer";


class Pin1 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  

  render() {
    return (
      <>
        <form className="d-flex" onSubmit={this.handleSubmit}>
          <input
            className="form-control me-2"
            onChange={this.handleChange}
            placeholder="Enter The Pincode"
          />
          <Link to={"/findpin/" + this.state.value} onClick={this.handleSubmit}>
            <button className="btn btn-outline-success" style={{color:"white", backgroundColor:"black"}}>Search</button>
          </Link>
        </form>
      </>
    );
  }
}

export default Pin1;