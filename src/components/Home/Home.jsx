import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div className="py-1 home">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                {/* <p>left home</p> */}
                <div className="mt-4 ms-3 me-3 border bg-success-subtle">
                  <div className="ms-3 mt-3 fw-bold text-secondary">
                    Live Feed
                  </div>
                  <hr />
                  <div className=" d-flex col-md-12 ms-2 mb-3">
                    <div className="flex-column col-md-6">
                      <div className="text-success fw-bold ms-1">
                        36.69% <ArrowDropUpIcon />
                      </div>
                      <div className="fs-5">
                        <CurrencyRupeeIcon />
                        435.55 Lacs
                      </div>
                      <p className="ms-1">Loan amount approved</p>
                    </div>
                    <div
                      className="flex-column col-md-6 text-center bg-light border-bottom border-4"
                      style={{ marginLeft: "-0.40rem" }}
                    >
                      <div className="d-flex fs-4 ms-5 mt-3">
                        <span>24.37% &nbsp;&nbsp;</span>
                        <span className="text-success fw-bold">
                          0.45% <ArrowDropUpIcon />
                        </span>
                      </div>
                      <span
                        className="text-center"
                        style={{ marginRight: "0.50rem" }}
                      >
                        Average interest rate
                      </span>
                    </div>
                  </div>
                  <div className="d-flex col-md-12 ms-2 me-2">
                    <div className="flex-column col-md-6">
                      <div className="text-success fw-bold ms-1">
                        7.84% <ArrowDropUpIcon />
                      </div>
                      <div className="fs-5">1114 requests</div>
                      <p className="ms-1">Loan requests received</p>
                    </div>
                    <div className="flex-column col-md-6">
                      <div className="text-success fw-bold">
                        18.07% <ArrowDropUpIcon />
                      </div>
                      <div className="fs-5">9552</div>
                      <p>Offers Investment Proposals</p>
                    </div>
                  </div>
                  <p className="text-center text-danger fw-light">
                    Calculations are based on rolling seven (7) days
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                {/* <div>Right Home</div> */}
                <div className="mt-4 mx-3">
                  <div className="fw-medium fs-2 text-center">Register Now</div>
                  <div className="mt-3 ms-2 me-2 fw-medium d-flex justify-content-around">
                    <div className="">
                      <NavLink to="/signup">
                        <button
                          className="btn btn-primary"
                          style={{ width: "13rem", fontSize: "21px" }}
                        >
                          Lender
                        </button>
                      </NavLink>
                      <p
                        className="fw-strong mt-1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Get returns up to 12%
                      </p>
                      <div
                        className="border border-primary text-center rounded p-2"
                        style={{ width: "13rem" }}
                      >
                        <div className="text-primary">Lenders </div>
                        <div> Committed to Lend </div>
                        <div>
                          <CurrencyRupeeIcon />
                          1,657,430,000
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        className="btn btn-success"
                        style={{ width: "13rem", fontSize: "21px" }}
                      >
                        Borrower
                      </button>
                      <p
                        className="fw-strong mt-1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Get rates as low as 12%
                      </p>
                      <div
                        className="border border-success text-center rounded p-2"
                        style={{ width: "13rem" }}
                      >
                        <div className="text-success">Borrowers </div>
                        <div>Seeking to borrow</div>
                        <div>
                          <CurrencyRupeeIcon />
                          2,526,141,444
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
