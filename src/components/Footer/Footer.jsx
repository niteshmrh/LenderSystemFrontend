import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer(props) {
  return (
    <div className="py-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex">
              <div className="col-md-2">
                <ul>
                  <li className="fw-medium fs-5">CONTACT US</li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      Careers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      Affiliates & Partners
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <ul>
                  <li className="fw-medium fs-5">HELP</li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      FAQ Borrowers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      FAQ Lenders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      Glossary
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li className="fw-medium fs-5">LEGAL</li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      Terms of Use
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      Privacy & Security Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      Fair Practices Code
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="text-decoration-none">
                      Grievance Redressal Policy
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <ul>
                  <li className="fw-medium fs-5">FOLLOW US</li>
                  <div className="d-flex">
                    <li className="">
                      <NavLink to="#" className="text-decoration-none">
                        <FacebookIcon className="text-white bg-primary border-primary border-5 rounded-circle" />
                      </NavLink>
                    </li>
                    <li className="ms-1">
                      <NavLink to="#" className="text-decoration-none">
                        <TwitterIcon className="text-white bg-primary border-primary rounded-circle" />
                      </NavLink>
                    </li>
                    <li className="ms-1">
                      <NavLink to="#" className="text-decoration-none">
                        <YouTubeIcon className="text-white bg-danger border-primary rounded-circle" />
                      </NavLink>
                    </li>
                    <li className="ms-1">
                      <NavLink to="#" className="text-decoration-none">
                        <LinkedInIcon className="text-white bg-primary border-primary rounded-circle" />
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="col-md-3">
                <img
                  src="https://d1sxjd465t5upi.cloudfront.net/media-responsive-theme/images/payment-securedby.png"
                  alt="image "
                  width="70%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
