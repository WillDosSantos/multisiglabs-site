import React, { useState } from "react";
import {
  BiChevronRight,
  BiCog,
  BiEditAlt,
  BiGame,
  BiHive,
} from "react-icons/bi";
import Link from "next/link";

export default function Products() {
  const [openStates, setOpenStates] = useState({ card1: false, card2: false });

  const toggleDetails = (cardId) => {
    setOpenStates(prev => ({ ...prev, [cardId]: !prev[cardId] }));
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
            individuals meeting them where they are at. Let’s build something
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
            <img src="/ggp-logo-white.svg" alt="GGP Logo" />
            <div className={`chevron-down-icon ${openStates.card1 ? 'rotate-icon' : ''}`}>
      
              <BiChevronRight />
       
            </div>
          </div>
          
            <div className={`card--details ${openStates.card1 ? 'open' : ''}`}>
              <p>
                GoGopool is a decentralized liquid staking protocol built to
                grow Avalanche Subnets. We are focused on our mission to bring
                blockchain to the world and expand the Subnet economy. GoGoPool
                was created in 2022 and is headed by Steven Gates and Johnny
                Gault. Over the past year and a half, GoGoPool has released
                several products including the highest yielding liquid staking
                token, a one-click deploy method to become a validator, and a
                Subnet MarketPlace where validators and Subnets can come
                together.
              </p>
              <Link href="https://gogopool.com" style={{ display: "flex", alignItems: "center" }}>Visit GoGoPool.com</Link>
            </div>
        
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration="1200" style={{ marginTop: "3em" }}>
          <div className="card--header" onClick={() => toggleDetails("card2")}>
            <img src="/pandasia.svg" alt="GGP Logo" />
            <div className={`chevron-down-icon ${openStates.card2 ? 'rotate-icon' : ''}`}>
           
              {openStates.card2 ? <BiChevronRight /> : <BiChevronRight />}
       
            </div>
          </div>
          
            <div className={`card--details ${openStates.card2 ? 'open' : ''}`}>
              <p>
                GoGopool is a decentralized liquid staking protocol built to
                grow Avalanche Subnets. We are focused on our mission to bring
                blockchain to the world and expand the Subnet economy. GoGoPool
                was created in 2022 and is headed by Steven Gates and Johnny
                Gault. Over the past year and a half, GoGoPool has released
                several products including the highest yielding liquid staking
                token, a one-click deploy method to become a validator, and a
                Subnet MarketPlace where validators and Subnets can come
                together.
              </p>
              <Link href="https://pandasia.io" style={{ display: "flex", alignItems: "center" }}>Visit Pandasia.io</Link>
            </div>
    
        </div>
      </div>
    </div>
  );
}
