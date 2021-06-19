import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Pin1 from "./Findpin1";


class State extends Component {
  constructor(props) {
    super(props);
    this.state = { states: [] };
  }

  componentDidMount() {
    this.getStates();
  }

  render() {
    return (
      <>
        {/* <h1>Cowin Slot</h1> */}

        <header className="navbar navbar-expand-lg">
          <Link to="/" className="nav-link active">
            <h1 style={{ color: "white" }}>Cowin Slot</h1>
          </Link>
          <Link to="/" className="nav-link active">
            <h3 style={{ color: "white" }}>Home</h3>
          </Link>
          <Pin1 />
        </header>

        <div className="text-center">
          <h1>Select State</h1>
        </div>

        <div className="container-fluid ">
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>State Id</th>
                  <th>State Name</th>
                  <th>District Details</th>
                </tr>
              </thead>

              {this.state.states
                ? this.state.states.map((s, i) => (
                    <>
                      <tbody className="">
                        <tr>
                          <td className="table-hover">{s.state_id}</td>
                          <td className="table-hover"> {s.state_name}</td>
                          <td className="table-hover">
                            <Link to={"/city/" + s.state_id}>
                              <button className="btn btn-secondary">
                                District Details
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))
                : ""}
            </table>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  getStates = async () => {
    const statejson = await fetch(
      "https://cdn-api.co-vin.in/api/v2/admin/location/states"
    );
    const statejsdata = await statejson.json();
    this.setState({ states: statejsdata.states });
  };
}

export default State;
