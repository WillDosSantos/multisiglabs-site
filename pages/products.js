import React, { useState } from "react";
import {
  BiChevronRight,
  BiCog,
  BiEditAlt,
  BiGame,
  BiHive,
} from "react-icons/bi";
import Link from "next/link";
import Image from 'next/image';

export default function Products() {
  const [openStates, setOpenStates] = useState({ card1: false, card2: false });

  const toggleDetails = (cardId) => {
    setOpenStates((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };
  return (
    <div className="container products-page">
      <div className="header">
        <div className="header--left">
          <h5>Our products are</h5>
          <h1>Driven by community</h1>
        </div>
        <div className="header--right">
          <p>
            We are community driven. Our team connects with projects and
            individuals meeting them where they are at. Let&apos;s build something
            great together!
          </p>
        </div>
      </div>
      <div
        className="main-content"
        style={{ position: "relative", zIndex: "2", minHeight: "500px" }}
      >
        <div className="card" data-aos="fade-up" data-aos-duration="1200">
          <div className="card--header" onClick={() => toggleDetails("card1")}>
            <Image src="/ggp-logo-white.svg" alt="GGP Logo" width={161} height={46} />
            <div
              className={`chevron-down-icon ${
                openStates.card1 ? "rotate-icon" : ""
              }`}
            >
              <BiChevronRight />
            </div>
          </div>

          <div className={`card--details ${openStates.card1 ? "open" : ""}`}>
            <p>
              GoGopool is a decentralized liquid staking protocol built to grow
              Avalanche Subnets. We are focused on our mission to bring
              blockchain to the world and expand the Subnet economy. GoGoPool
              was created in 2022 and is headed by Steven Gates and Johnny
              Gault. Over the past year and a half, GoGoPool has released
              several products including the highest yielding liquid staking
              token, a one-click deploy method to become a validator, and a
              Subnet MarketPlace where validators and Subnets can come together.
            </p>
            <Link
              href="https://gogopool.com"
              style={{ display: "flex", alignItems: "center" }}
            >
              Visit GoGoPool.com
            </Link>
          </div>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1200"
          style={{ marginTop: "3em" }}
        >
          <div className="card--header" onClick={() => toggleDetails("card2")}>
            <Image src="/pandasia.svg" alt="Pandasia Logo" width={118} height={60} />
            <div
              className={`chevron-down-icon ${
                openStates.card2 ? "rotate-icon" : ""
              }`}
            >
              {openStates.card2 ? <BiChevronRight /> : <BiChevronRight />}
            </div>
          </div>

          <div className={`card--details ${openStates.card2 ? "open" : ""}`}>
            <p>
              Pandasia is a platform designed to foster the growth of Subnets on
              the Avalanche network by facilitating token airdrops to registered
              Avalanche Validators, offering developers an easy method to reward
              those dedicated to the chain&apos;s success. To kickstart smart
              contract testing and compile an initial roster of node operators,
              early registrants will receive a GGP token airdrop. The platform
              enables validators to link their C-chain and P-chain addresses for
              verification, qualifying them for Subnet airdrops, thereby
              incentivizing active participation and community strengthening.
              Validators can register now, with Minipool operators
              pre-registered for immediate token claiming.
            </p>
            <Link
              href="https://pandasia.io"
              style={{ display: "flex", alignItems: "center" }}
            >
              Visit Pandasia.io
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
