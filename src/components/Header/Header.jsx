import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function Header(props) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log("In header -----", user);

  return (
    <div className="py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Lender
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <NavLink className="nav-link active" to="/">
                      Home
                    </NavLink>
                    <NavLink className="nav-link" to="/">
                      Features
                    </NavLink>
                    <NavLink className="nav-link" to="/">
                      Pricing
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end me-2">
                {!user ? (
                  <div>
                    <NavLink to="/login" className="text-decoration-none">
                      Login
                    </NavLink>
                    <span>&nbsp;|&nbsp;</span>
                    <NavLink to="/signup" className="text-decoration-none">
                      SignUp
                    </NavLink>
                  </div>
                ) : (
                  <div className="flex-row">
                    {user.roleId == 2 ? (
                      <span>
                        <NavLink to="#" className="text-decoration-none">
                          Registration
                        </NavLink>
                        <span>&nbsp;|&nbsp;</span>
                      </span>
                    ) : (
                      <span></span>
                    )}
                    <a
                      role="button"
                      tabIndex={0}
                      className="text-primary text-decoration-none"
                      onClick={() => {
                        setUser(null);
                        localStorage.clear();
                        navigate("/");
                      }}
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
