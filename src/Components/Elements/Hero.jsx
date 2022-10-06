import React from "react";
import {AiFillTwitterSquare} from 'react-icons/ai';
import {RiTelegramFill} from 'react-icons/ri';

function Hero() {
  return (
    <div className="bg">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 floki">
            <h1>Halloween Floki</h1>
          </div>
          <div className="col-md-6 floki">
            <div className="card py-5">
              <div>
                <h1>$FLOH Live Now!</h1>
              </div>
              <div>
                <AiFillTwitterSquare size={"50px"} style={{color:"#1D9BF0"}}/>
                <RiTelegramFill  size={"50px"} style={{color:"#745F98" }}/>
              </div>
              <div>
                <p><b>Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
