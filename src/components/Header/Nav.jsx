import { Link } from "react-router-dom";
import 'react-bootstrap'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <h4 className="small-nav-logo">
        </h4> */}
        {/* <button
          // className="navbar-toggler"
          // type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarNav"
          // aria-controls="navbarNav"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className="collapse navbar-collapse container-fluid"
          id="navbarNav"
          style={{ justifyContent: "space-between" }}
        >
          <ul className="navbar-nav ml-auto" id="navlinks">
            <li className="nav-item">
              <a href="/" className="btn nav-link">
                <Link to="/">About Me</Link>
              </a>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="btn nav-link">
                <Link to="/portfolio">Portfolio</Link>
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="btn nav-link">
                <Link to="/contact">Contact Me</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}