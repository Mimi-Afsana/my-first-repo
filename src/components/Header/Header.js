import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h1>awesome meal db is header</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid  justify-content-end">
          <div className="d-lg-flex d-md-flex d-sm-block me-5 ">
            <CustomLink className="nav-link active fw-bold" to="/">
              Home
            </CustomLink>

            <CustomLink className="nav-link active fw-bold" to="description">
              Description
            </CustomLink>

            <CustomLink className="nav-link active fw-bold" to="about">
              About
            </CustomLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
