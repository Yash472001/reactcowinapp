import React, { Component } from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome";

class Footer extends Component {

    render() {
        return (
          <footer
            className=" yellow footer p-0 shadow-lg bgcol"
            style={{ color: "black" }}
          >
            <div className="text-center p-1 ">
              <div className="pt-1">
                
                <a
                  href="https://www.facebook.com/profile.php?id=100009900399617"
                  target="_blank"
                >
                  <i className="fab fa-facebook fa-2x m-1 text-white"></i>
                </a>
                <a
                  href="https://www.instagram.com/satyam1998.1998/"
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-2x m-1 text-white"></i>
                </a>
                <a href="mailto:satyam1998.1998@gmail.com" target="_blank">
                  <i className="fas fa-envelope fa-2x m-1 text-white"></i>
                </a>
                <a
                  href="https://www.hackerrank.com/satyam1998_1998"
                  target="_blank"
                >
                  <i className="fab fa-hackerrank fa-2x m-1 text-white"></i>
                </a>
                <a href="https://twitter.com/SatyamS31450520" target="_blank">
                  <i className="fab fa-twitter fa-2x m-1 text-white"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/satyam-seth-39069b17a"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </div>
              <p>Copyright &#169; 2021 Yash Patel</p>
            </div>
          </footer>
        );
    }
}
   
export default Footer;


