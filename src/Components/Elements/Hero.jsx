import React from "react";
import {BsTwitter} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';

function Hero() {
  return (
    <div className="bg">
      <div className="container text-center hero">
        <div className="row">
          <div className="col-md-6 hallo-text">
            <div className=" halloween-floki">

            <h1 >Halloween <br /> Floki</h1>
          </div>
            </div>
          <div className="col-md-6 floki">
            <div className="card hero-card py-5">
              <div>
                <h1>$FLOH Live Now!</h1>
              </div> <br />
              <div>
                <a href="/" className="buy">Buy</a>
              </div> <br />
              <div>
                <BsTwitter size={"50px"} style={{color:"white", backgroundColor:"#1D9BF0",padding:"6px" , borderRadius:"7px"}}/> &nbsp;
                <FaTelegramPlane  size={"50px"} style={{color:"white",backgroundColor:"#745F98",padding:"6px", borderRadius:"7px"}}/>
              </div> <br />
              <div>
                <p><b>Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326</b></p>
              </div> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
