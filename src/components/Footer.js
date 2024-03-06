import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
        rel="stylesheet"
      ></link>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            previewlistener="true"
          ></Link>
          <span className="text-muted">© 2023 Maniac, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-3">
          <li className="ms-3 me-2">
            <a className="text-muted" href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3 me-2">
            <a className="text-muted" href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3 me-2">
            <a className="text-muted" href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
