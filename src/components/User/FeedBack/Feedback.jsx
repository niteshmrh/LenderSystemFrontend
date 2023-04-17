import React from "react";

function Feedback(props) {
  return (
    <div className="user-feedback">
      <div className="text-center">Help us improve your experience</div>
      <img
        className="mt-4 rounded mx-auto d-block"
        src="https://www.faircent.in/sites/all/modules/lenderv2/lender_newdashboard/img/feedback-box.png"
        alt="feedback-image"
      />
      <div className="mt-4 ms-5">
        <textarea
          className="form-control ms-5 border-dark"
          placeholder="Please share your comment here..."
          style={{ width: "90%", height: "20%" }}
        ></textarea>
      </div>
      <div className="mt-3 text-center">
        <button className="btn btn-primary btn-lg rounded-pill">Submit</button>
      </div>
    </div>
  );
}

export default Feedback;
