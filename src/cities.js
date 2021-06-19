import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Pin1 from "./Findpin1";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      stateId: props.match.params.id,
    };
  }

  componentDidMount() {
    this.getDistrictData();
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
          <h1>Select District</h1>
        </div>

        <div className="container-fluid ">
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>District Id</th>
                  <th>District Name</th>
                  <th>Center Details</th>
                </tr>
              </thead>
              {this.state.cities
                ? this.state.cities.map((c, i) => (
                    <tbody className="">
                      <tr>
                        <td className="table-hover">{c.district_id}</td>
                        <td className="table-hover"> {c.district_name}</td>
                        <td>
                          <Link to={"/district/" + c.district_id}>
                            <button className="btn btn-secondary">
                              Center Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  ))
                : ""}
            </table>
          </div>
        </div>
        <Footer/>
      </>
    );
  }

  getDistrictData = async () => {
    const districts = await fetch(
      "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" +
        this.state.stateId
    );
    const districtsJson = await districts.json();
    this.setState({ cities: districtsJson.districts });
  };
}

export default City;
