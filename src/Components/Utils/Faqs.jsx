import React from "react";
import Faq from "react-faq-component";
import { IoMdArrowDropright } from "react-icons/io";

const data = {
  rows: [
    {
      title: <b> Why is the payout in BUSD, not in $FLOH? </b>,
      content: `This is a massive advantage of FLOH compared to other crypto projects. Halloween Floki, like every coin on the market, might fluctuate in value a lot. In contrast, BUSD is very stable, almost 1:1 to USD, which in result, reduces the risk of your investment. With decent volume, your investment will pay for itself over time`,
    },
    {
      title: <b>What is slippage for? </b>,
      content:
        "To set the tolerance on the maximum percentage of price movement you can live with. IT IS NOT A TAX.",
    },
    {
      title: <b> Why 8% tax and when is it applied?</b>,
      content: `It is applied to EVERY TRANSACTION, this includes: Buys, Sells and Transfers. 4% gets redistributed to all holders, 3% to marketing, and 1% to the liquidity pool. `,
    },
    {
      title: <b> Why am I not receiving rewards?</b>,
      content:
        "Rewards are directly related to trading volume and your bag size. The higher the volume, the more rewards you earn!",
    },
    {
      title: <b> What is AMA and when do they happen?</b>,
      content:
        "Ask Me Anything, (AMA) is an open space where investors can talk to the developers and ask questions. The Halloween Floki team will be holding AMA’s on a regular schedule. Make sure to join our telegram to learn more about the schedule",
    },
    {
      title: <b> What is the contract address? </b>,
      content: `The address is as follows: <br /> <br />

        0x2c0e76dade015bc390a13c1b80cc1bafd9edd326`,
    },
  ],
};

const styles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};

const config = {
  //   animate: true,
  arrowIcon: <IoMdArrowDropright />,
  //   tabFocus: true
};

function Faqs() {
  return (
    <div className="footerbg">
      <div class="container text-center py-5">
        <div class="row">
          <div class="col">
            <div className="text-start">
              <span>
                __________ <b>FAQS</b>
              </span>{" "}
              <br /> <br />
              <h1>Frequently Asked Questions</h1> <br /> <br /> <br /> <br />{" "}
              <br />
            </div>
            <div>
              <Faq config={config} data={data} styles={styles} />
            </div>
          </div>
          <div class="col faq-img">
          <img
              className="img-fluid "
              src="Assets/faqs.png"
              alt="Faq Message"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
