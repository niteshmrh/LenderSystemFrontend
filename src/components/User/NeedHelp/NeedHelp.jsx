import React from "react";

function NeedHelp(props) {
  return (
    <div className="need-help">
      <div className="text-center fw-bold mb-3 fs-3">Contact Us</div>
      <div className="mt-2 text-center">
        <img
          src="https://www.faircent.in/sites/all/modules/lenderv2/lender_newdashboard/img/need-help-img.png"
          alt="contact-us-img"
        />
      </div>
      <div className="mt-4 d-flex">
        <div className="col-md-6">
          <form className="">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Please share your comment here..."
              />
            </div>
            <div className="mt-3 text-center">
              <button className="btn btn-primary btn-lg rounded-pill">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mx-3 border border-dark-subtle"></div>
        <div className="">
          <div>Business office</div>
          <div className="fw-light" style={{ fontSize: "0.95rem" }}>
            5C & 5D, 5th floor, Lemon Tree, Sector 60, Gurgaon – Haryana 122011
          </div>
          <div className="fw-light">Phone : 0120-4659902</div>
          <div className="fw-light">Timing : 9:30 AM to 6 PM</div>
        </div>
      </div>
    </div>
  );
}

export default NeedHelp;
