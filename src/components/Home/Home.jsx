import React from "react";

function Home(props) {
  return (
    <div className="py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <p>left home</p>
                <div className="mt-5 ms-3 me-3 border">
                  <div className="ms-3">Live Feed</div>
                  <hr />
                </div>
              </div>
              <div className="col-md-6">right home</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
