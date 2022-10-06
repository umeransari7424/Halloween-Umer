import React from "react";
import { AiFillCheckCircle } from "react-icons//ai";

function Documents() {
  return (
    <div className="documentbg py-4">
      <div className="container docbg ">
        <div className="row">
            <div className="col-md-8">
        <div className=" document">
          <div>
            <span>
              __________ <b>Whitepaper</b>
            </span>
          </div>{" "}
          <br />
          <div>
            <h1>
              <b>Read Our Documents</b>
            </h1>
          </div>{" "}
          <br /> <br />
          <div className="justify-content-space-between">
            <div>

            <span>
              <AiFillCheckCircle size={"50px"} style={{ color: "#F27022" }} />{" "}
              &nbsp; &nbsp; <b>KYC</b>
            </span>{" "}
            </div>
            <div>

            <span>
              <AiFillCheckCircle size={"50px"} style={{ color: "#F27022" }} />{" "}
              &nbsp; &nbsp; <b>Audit</b>
            </span>{" "}
            </div>
            <div>

            <span>
              <AiFillCheckCircle size={"50px"} style={{ color: "#F27022" }} />{" "}
              &nbsp; &nbsp; <b>Whitepaper</b>
            </span>
            </div>
            
          </div>
          <br />
          <br />
          <div>
            <div class="btn-group drop-btn" >
              <button
                class="btn btn-secondary btn-lg dropdown-toggle drop-btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Download
              </button>
              <ul class="dropdown-menu dropitem-btn">
                <li>
                  <a class="dropdown-item" href="/">
                  KYC
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                  Audit
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                  Whitepaper
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-4 docimg">
            <div>
            <img className="img-fluid" src="Assets/documents.png" alt="Documents img" />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
