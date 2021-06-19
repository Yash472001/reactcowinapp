import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Pin1 from "./Findpin1";


class District extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [],
      district_id: props.match.params.id,
    };
  }

  componentDidMount() {
    this.getCenterData();
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
          <h1>Select Center</h1>
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
                ? this.state.center.map((d, i) => (
                    <tbody className="">
                      <tr>
                        <td className="table-hover">{d.name}</td>
                        <td className="table-hover"> {d.address}</td>
                        <td className="table-hover"> {d.block_name}</td>
                        <td className="table-hover"> {d.available_capacity}</td>
                        <td className="table-hover"> {d.vaccine}</td>
                        <td className="table-hover"> {d.fee_type}</td>
                        <td className="table-hover"> {d.min_age_limit}</td>
                        <td className="table-hover"> {d.date}</td>
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

    
getCenterData = async () => {
      
         const date = new Date();
         const currDate = date.getDate();
         const currMonth = date.getMonth() + 1;
         const currYear = date.getFullYear();
         

    const district_name = await fetch(
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=" +
        this.state.district_id +
        "&date=" +
        currDate +
        "-" +
        currMonth +
        "-" +
        currYear
    );
    const centerdata = await district_name.json();

    this.setState({ center: centerdata.sessions });
  };
}

export default District;



