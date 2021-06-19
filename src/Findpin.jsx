import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Pin1 from './Findpin1';
import Footer from "./Footer";


class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [],
      pincode: props.match.params.id, 
    };


  }
  
  componentDidMount() {
    this.getPinData();
  }

  render() {
    return (
      <>
        <header className="navbar navbar-expand-lg">
          <Link to="/" className="nav-link active">
            <h1 style={{ color: "white" }}>Cowin Slot</h1>
          </Link>
          <Link to="/" className="nav-link active">
            <h3 style={{ color: "white" }}>Home</h3>
          </Link>
          <Pin1/>
        </header>

        <div className="text-center">
          <h1>Book Appoinment</h1>
        </div>

        <div className="container-fluid ">
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Center Name</th>
                  <th>Address</th>
                  <th>Block Name</th>
                  <th>Available Dose</th>
                  <th>Vaccine Name</th>
                  <th>Fee</th>
                  <th>Age Limit</th>
                  <th>Date</th>
                  <th>Book Appoinment</th>
                </tr>
              </thead>

              {this.state.center
                ? this.state.center.map((h, i) => (
                    <tbody className="">
                      <tr>
                        <td className="table-hover">{h.name}</td>
                        <td className="table-hover"> {h.address}</td>
                        <td className="table-hover"> {h.block_name}</td>
                        <td className="table-hover"> {h.available_capacity}</td>
                        <td className="table-hover"> {h.vaccine}</td>
                        <td className="table-hover"> {h.fee_type}</td>
                        <td className="table-hover"> {h.min_age_limit}</td>
                        <td className="table-hover"> {h.date}</td>
                        <td>
                          <a
                            href="https://selfregistration.cowin.gov.in/"
                            target="_blank"
                          >
                            <button className="btn btn-secondary">
                              Book Appoinment
                            </button>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  ))
                : ""}
            </table>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  getPinData = async () => {
    const date = new Date();
    const currDate = date.getDate();
    const currMonth = date.getMonth() + 1;
    const currYear = date.getFullYear();

    const district_name = await fetch(
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" +
        this.state.pincode +
        "&date=" +
        currDate +
        "-" +
        currMonth +
        "-" +
        currYear
    );
    const centerdata = await district_name.json();
    console.log(centerdata.sessions);
    this.setState({ center: centerdata.sessions });
  };
}

export default Pin;