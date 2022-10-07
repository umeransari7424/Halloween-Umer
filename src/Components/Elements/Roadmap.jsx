import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Roadmap() {
  return (
    <div className="roadmapbg">
      <div className="contianer text-center py-5">
        <div>
          <span>
            <b>ROADMAP</b>
          </span>
          <h1>
            <b>Our Plan</b>
          </h1>
        </div>
        <div className="py-5">
          <VerticalTimeline>
            <VerticalTimelineElement
              position={"right"}
              className="vertical-timeline-element--work"
              contentStyle={{ color: "grey" }}
              iconStyle={{
                background: "#F27022",
                color: "grey",
                borderRadiusColor: "#F27022",
              }}
            >
              <h3 className="vertical-timeline-element-title text-start">
                <b>Phase 1</b>
              </h3>{" "}
              <br />
              <ul className="token-list-style text-start">
                <li>Team Expansion</li>
                <li>Social Media and Community Integration</li>
                <li>Contract Creation</li>
                <li>Website Deployment</li>
                <li>Audit & KYC</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              position={"left"}
              className="vertical-timeline-element--work"
              contentStyle={{ color: "grey" }}
              iconStyle={{
                background: "#F27022",
                color: "grey",
                borderRadiusColor: "#F27022",
              }}
            >
              <h3 className="vertical-timeline-element-title text-start">
                <b>Phase 2</b>
              </h3>{" "}
              <br />
              <ul className="token-list-style text-start">
                <li>Presale Whitelist Competition</li>
                <li>Presale Marketing Campaign</li>
                <li>Presale Launch on Pinksale</li>
                <li>Airdrop Partnership</li>
                <li>Foreign Communities Integration and Creation</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              position={"right"}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "grey" }}
              contentArrowStyle={{
                borderRight: "9px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "#F27022" }}
            >
               <h3 className="vertical-timeline-element-title text-start">
                <b> Phase 3</b>
              </h3>{" "}
              <br />
              <ul className="token-list-style text-start">
                <li>Pre-Launch Marketing Campaign</li>
                <li>Launch on PancakeSwap</li>
                <li>Airdrop for Migrating Holders</li>
                <li>Reward Tracker Partnership</li>
                <li>Farm & Staking Pools</li>
                <li>CMC/CG Listings</li>
                <li>5 Million Market Cap</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              position={"left"}
              className="vertical-timeline-element--work"
              contentStyle={{ color: "grey" }}
              iconStyle={{
                background: "#F27022",
                color: "grey",
                borderRadiusColor: "#F27022",
              }}
            >
              <h3 className="vertical-timeline-element-title text-start">
                <b>Phase 4</b>
              </h3>{" "}
              <br />
              <ul className="token-list-style text-start">
                <li>FLOH Holders Lottery</li>
                <li>Worldwide Halloween Dog Costume Contest</li>
                <li>CEX Listing</li>
                <li>ETH Bridging</li>
                <li>NFT Collection Website Integration</li>
                <li>NFT Collection Marketing Campaign</li>
                <li>15 Million Market Cap</li>
              </ul>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              position={"right"}
              className="vertical-timeline-element--work"
              contentStyle={{ color: "grey" }}
              iconStyle={{
                background: "#F27022",
                color: "grey",
                borderRadiusColor: "#F27022",
              }}
            >
              <h3 className="vertical-timeline-element-title text-start">
                <b>Phase 5</b>
              </h3>{" "}
              <br />
              <ul className="token-list-style text-start">
                <li>Influencers Campaign</li>
                <li>NFT Collection Whitelist Contest</li>
                <li>NFT Collection Launch</li>
                <li>Second CEX Listing</li>
                <li>Record for a Holiday Floki Project: 30 Million Market Cap</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
