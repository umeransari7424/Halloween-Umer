import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <img src="Assets/FLOH_Logo.png" width={"110px"} alt="Quant Network" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <b>About</b>
                </a>
              </li>{" "}
              &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <b>Tokenomics</b>
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <b>Roadmap</b>
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <b>Documents</b>
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <b>FAQ</b>
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active nft" aria-current="page" href="/">
                  <b>MINT FLOH RAFFLE NFT</b>
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
