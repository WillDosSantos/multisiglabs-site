
import React from 'react';
import MSLOutlineLogo from 'components/msl-outline-logo.js';
import { BiCog, BiEditAlt, BiGame, BiHive } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function About() {
  return (
    <div className="container">
        
      <div className="header" data-aos="fade-up"
              data-aos-duration="1200">
        <div className="header--left">
          <h5>We are</h5>
          <h1>Here to stay & doing things in a new way</h1>
        </div>
        <div className="header--right">
          <p>
            Our mission is clear; bring blockchain to the world through Subnets.
            Our team is dedicated to the improvement and reliability of Web3
            technology.
          </p>
        </div>
      </div>
      <div className="main-content" style={{ position: 'relative', zIndex: '2' }}>
        <div style={{ margin: "4em 0" }} className="col-container col-2">
          <div className="col-left" style={{ position: "relative" }}>
            <img
              data-aos="fade-right"
              data-aos-duration="1200"
              src="steve-pic.png"
              alt="Picture of Steven Gates, CEO"
              style={{ maxWidth: "412px" }}
            />
            <span style={{ position: "absolute", right: "100px", bottom: "10px" }}>Steven Gates, CEO</span>
          </div>
          <div className="col-right col-content" data-aos="fade-left"
              data-aos-duration="1200">
            <h5>Overview</h5>
            <p>
              Multisig Labs Incorporated, founded in 2021 by Steven Gates, is a
              technology company focused on innovative products for Web3 and
              emerging technologies. Our team, comprised of talented individuals
              in development, creative, and marketing, is currently working on
              our flagship app, GoGoPool.
            </p>
            <p>
              GoGoPool is a decentralized staking protocol designed for the
              Avalanche subnets, with a focus on smart contracts and building
              Web3 infrastructure for subnet projects. Our company is
              experiencing rapid growth, with involvement in numerous projects
              across the Web3 ecosystem.
            </p>
            <p>
              Led by Steven Gates and co-founder Johnny Gault, our dedicated dev
              team is focused on refining and securing our technology. Security
              is our top priority, and we are excited to collaborate with you.
            </p>
          </div>
        </div>
        <div style={{ margin: "4em 0" }} className="main-content">
            <MSLOutlineLogo/>
          <div className="header header--center" data-aos="fade-up" data-aos-duration="1200" style={{ maxWidth: "530px", margin: "0 auto" }}>
            <h1>Our team</h1>
            <p>
            Our strength lies in our diverse mindsets. A collective of remarkable talent, our team spans across development, creativity, and marketing, all working in harmony to lead the charge in emerging technologies.
            </p>
           
          </div>
          <div className="company-category" data-aos="fade-up" data-aos-duration="1200">
            <div className="category-label" style={{ margin: "2em auto", width: "100%", maxWidth: "300px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="category-label-icon">
                    <IconContext.Provider value={{ size: "2em" }}>
                    <BiGame />
                    </IconContext.Provider>
                </div>
                <h5>LEADERSHIP</h5>
            </div>
            <div className="col-container col-2">
                <div className="card">
                    <h3>Steven Gates</h3>
                    <h4>CEO & Co. Founder</h4>
                </div>
                <div className="card">
                    <h3>Johnny Gault</h3>
                    <h4>CTO & Co. Founder</h4>
                </div>
            </div>
          </div>
          <div className="company-category" data-aos="fade-up" data-aos-duration="1200">
            <div className="category-label" style={{ margin: "2em auto", width: "100%", maxWidth: "300px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="category-label-icon">
                    <IconContext.Provider value={{ size: "2em" }}>
                    <BiEditAlt />
                    </IconContext.Provider>
                </div>
                <h5>Creative</h5>
            </div>
            <div className="col-container col-1">
                <div className="card" style={{ maxWidth: "450px", margin: "0 auto" }}>
                    <h3>William G. dos Santos</h3>
                    <h4>Founding Designer</h4>
                </div>
            </div>
          </div>
          <div className="company-category" data-aos="fade-up" data-aos-duration="1200">
            <div className="category-label" style={{ margin: "2em auto", width: "100%", maxWidth: "300px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="category-label-icon">
                    <IconContext.Provider value={{ size: "2em" }}>
                    <BiCog />
                    </IconContext.Provider>
                </div>
                <h5>Engineering</h5>
            </div>
            <div className="col-container col-2">
                <div className="card">
                    <h3>Julie Aichinger</h3>
                    <h4>Sr. Engineer</h4>
                </div>
                <div className="card">
                    <h3>Emerson Cloud</h3>
                    <h4>Sr. Engineer</h4>
                </div>
                <div className="card">
                    <h3>Chandler Lofland</h3>
                    <h4>Back-End Engineer</h4>
                </div>
                <div className="card">
                    <h3>Julie Aichinger</h3>
                    <h4>Front-end Engineer</h4>
                </div>
            </div>
          </div>
          <div className="company-category" data-aos="fade-up" data-aos-duration="1200">
            <div className="category-label" style={{ margin: "2em auto", width: "100%", maxWidth: "300px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="category-label-icon">
                    <IconContext.Provider value={{ size: "2em" }}>
                    <BiHive />
                    </IconContext.Provider>
                </div>
                <h5>Marketing & Business</h5>
            </div>
            <div className="col-container col-2">
                <div className="card">
                    <h3>Christopher Stephens</h3>
                    <h4>Head of Marketing</h4>
                </div>
                <div className="card">
                    <h3>J.F. </h3>
                    <h4>Head of Defi</h4>
                </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "4em 0" }} className="main-content">
          <div className="header" style={{ maxWidth: "530px", flexDirection: "column", alignItems: "flex-start" }}>
            <h1>Investing Partners</h1>
            <p style={{ maxWidth: "350px" }}>
            We carefully consider our investing partners and join forces with the best in the industry.
            </p>
          </div>
          <div className="col-container col-4 investor-logos" >
            <img src="/investor-logos/Logo-Investor-AlphaCrypto.svg" data-aos="fade-up" data-aos-duration="1200" alt="AlphaCrypto Logo" />
            <img src="/investor-logos/Logo-Investor-Fintech-Collective.png" data-aos="fade-up" data-aos-duration="1300" alt="Finetech Collective Logo" />
            <img src="/investor-logos/Logo-Investor-Republic-Capital.svg" data-aos="fade-up" data-aos-duration="1400" alt="Republic Capital Logo" />
            <img src="/investor-logos/Logo-Investor.svg" data-aos="fade-up" data-aos-duration="1500" alt="Logo" />
            <img src="/investor-logos/Logo-Investors-Avalaunch.svg" data-aos="fade-up" data-aos-duration="1600" alt="Avalaunch Logo" />
            <img src="/investor-logos/Logo-Investors-Builder.png" data-aos="fade-up" data-aos-duration="1700" alt="Builder Logo" />
            <img src="/investor-logos/Logo-Investors-CoinFund.png" data-aos="fade-up" data-aos-duration="1800" alt="CoinFund Logo" />
            <img src="/investor-logos/Logo-Investors-Framework.svg" data-aos="fade-up" data-aos-duration="1900" alt="Framework Logo" />
            <img src="/investor-logos/Logo-Investors-GBV.svg" data-aos="fade-up" data-aos-duration="2000" alt="GBV Logo" />
            <img src="/investor-logos/Logo-Investors-Silverstone.svg" data-aos="fade-up" data-aos-duration="2100" alt="Silverstone Logo" />
            </div>
        </div>
      </div>
    </div>
  );
}
