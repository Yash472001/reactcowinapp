import React, { Component } from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome";

class Footer extends Component {

    render() {
        return (
          <footer
            className=" yellow footer p-0 shadow-lg bgcol text-center"
            style={{ color: "black" }}
          >
            
              <p>Copyright &#169; 2021 Yash Patel</p>
            
          </footer>
        );
    }
}
   
export default Footer;


