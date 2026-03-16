import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <h4>
          <strong>Page not found</strong>
        </h4>
        <Link to={"/"}>
          <button>Go to Home</button>
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
