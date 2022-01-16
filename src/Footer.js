import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-dark d-flex flex-wrap justify-content-between align-items-center py-4  border-top">
        <div className="container">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-decoration-none lh-1"
            ></a>
            <span class="text-light">
              Rohit's React App &copy; 2021 | All Rights Reserved
            </span>
          </div>

          {/* <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a target="_blank" class="text-muted" href="#"></a>
            </li>
            <li class="ms-3">
              <a target="_blank" class="text-muted" href="#"></a>
            </li>
            <li class="ms-3">
              <a target="_blank" class="text-muted" href="#"></a>
            </li>
          </ul> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
