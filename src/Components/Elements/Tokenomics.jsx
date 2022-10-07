import React from "react";
import { FaDollarSign, FaBullhorn, FaUserShield } from "react-icons/fa";
import { BiWater } from "react-icons/bi";

function Tokenomics() {
  return (
    <div className="tokenbg">
      <div className="container-fluid token-padding">
        <div className="contianer p-5">
        <div>
          <span>
            __________ <b>WHAT IS OUR TOKENOMICS</b>
          </span>
        </div>{" "}
        <br />
        <div>
          <p>
            At Halloween Floki, we are designing a project based on definitive
            market rules and fundamental economic principles. Halloween Floki
            reconciles a high-performance protocol with integral price stability
            features.
          </p>
        </div>{" "}
        <br />
        <div>
          <span>Total Sudopply: 1 000 000 000 000 FLOH</span>
        </div>{" "}
        <br />
        <br />
        <div>
          <span>8% Buy and Sell Tax:</span>
        </div>{" "}
        <br />
        <br />
        <div>
          <ul className="token-list-style">
            <li>
              4% holders rewards: Dividend tax on all transactions that will be
              distributed every 24 hours to holders in BUSD.
            </li>{" "}
            <br />
            <li>
              1% liquidity: Liquidity tax on all transactions to prevent major
              price fluctuation after a large trade by filling the liquidity
              pool.
            </li>{" "}
            <br />
            <li>
              3% marketing: Marketing tax on all transactions allows the
              Halloween Floki marketing team to reinvest and grow the project to
              its maximum potential.
            </li>
            <br />
          </ul>
        </div>
        <div>
          <span>
            __________ <b> WHAT ARE OUR FEATURES</b>
          </span>
        </div>{" "}
          </div>
        <br />
        <div className="container token-cards ">
            <div className="row">

          <div className="col-md-3 col-12">
            <div
              className="card tokencard p-3 m-2"
              style={{ maxwidth:"280px"}}
              >
              <FaDollarSign size={"100px"} /> <br />
              <h1>$BUSD Rewards</h1>
              <p>
                Earn automatic Binance pegged USD ($BUSD), rewards by holding
                your Halloween Floki Coin – 4% of every buy, transfer and sell
                transaction is redistributed automatically to $FLOH holders. You
                will receive the rewards automatically in your wallet or claim
                your rewards manually in our upcoming reward app tracker.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div
              className="card tokencard p-3 m-2"
              style={{ minHeight:"500px" }}
              >
              <FaBullhorn size={"100px"} /> <br />
              <h1>Marketing</h1> <br />
              <p>
                3% of every transaction will directly go to the marketing wallet
                in order to ensure an increase in exposure throughout
                advertisement platforms, social media and to secure contracts
                and deals with influencers. This will help FLOH achieve an
                international status and to be known within every community!
              </p>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div
              className="card tokencard p-3 m-2"
              style={{minHeight:"500px"}}
              >
              <BiWater size={"100px"} /> <br />
              <h1>Liquidity Pool</h1> <br />
              <p>
                Our Smart contract deposits 1% from every transaction as $FLOH
                and $BNB into a liquidity pool which has been locked and
                certified. Pancakeswap fixes the low liquidity problems of DEXs
                through their Liquidity Pools, ensuring traders can always Buy &
                Sell without liquidity issues. A bigger liquidity pool will
                provide more stability to the $FLOH price.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div
              className="card tokencard p-3 m-2"
              style={{ minHeight:"500px"}}
              >
              <FaUserShield size={"100px"} /> <br />
              <h1>Anti-Whale Mechanism</h1> <br />
              <p>
                Our Anti-Whale mechanism ensures that no single transaction
                order can amount to more than 1% of the total supply of $FLOH.
                The Anti-Whale Mechanism won’t necessarily stop whales from
                selling, but having a maximum limit helps to prevent large
                selloffs and price manipulation.
              </p>
            </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
