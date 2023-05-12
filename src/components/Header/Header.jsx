import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import jwt_decode from "jwt-decode";

function Header(props) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // console.log("In header -----", user);
  if (user) {
    var decoded = jwt_decode(user?.newJWT);
  }

  return (
    <div className="py-0">
      <div className="container-fluid">
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
                  <div className="d-flex">
                    <div className="me-2">
                      {user.roleId == 1 ? <span>Admin</span> : <span></span>}
                    </div>{" "}
                    <div className="btn-group dropstart">
                      <a
                        // type="button"
                        className="btn-primary"
                        data-bs-toggle="dropdown"
                      >
                        <AccountCircleIcon />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            {decoded?.firstName + " " + decoded?.lastName}
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Profile
                          </a>
                        </li>
                        <li>
                          {user.roleId == 2 ? (
                            <span>
                              <NavLink
                                to="/registration"
                                className="dropdown-item text-primary text-decoration-none"
                              >
                                Registration
                              </NavLink>
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </li>
                        <li>
                          {/* <NavLink
                            to="#"
                            className="dropdown-item text-primary text-decoration-none"
                          > */}
                          <a className="dropdown-item" href="#">
                            Plans
                          </a>

                          {/* </NavLink> */}
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-primary text-decoration-none"
                            role="button"
                            tabIndex={0}
                            onClick={() => {
                              setUser(null);
                              localStorage.clear();
                              navigate("/");
                            }}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
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
