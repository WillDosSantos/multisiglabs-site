import { BiBookOpen, BiEnvelope, BiMapPin, BiPhone } from "react-icons/bi";
import Link from "next/link";
import Image from 'next/image';

function Footer() {
  return (
    <div
      className="footer"
    >
      <div
        className="footer-nav flex flex-col lg:flex-row"
      >
        <Image
          data-aos="fade-up"
          src="../msl-logo.svg"
          alt="Multisig Labs Logo"
          width={272}
          height={45}
        />
        <ul
        className="flex flex-col ml-0 lg:flex-row mt-20 lg:mt-0 gap-40"
        >
          <li className="flex flex-col">
            <div className="list-header">Contact</div>
            <ul className="footer-details flex flex-col ml-0">
              <li className="footer-details_border">
                <BiMapPin />
                2000 Hughes Landing Blvd.
                <br />
                The Woodlands, TX. 77380
              </li>
              <li className="footer-details_border">
                <a
                  style={{ display: "flex", columnGap: "10px" }}
                  href="mailto:hello@multisiglabs.org?subject=New%20Message%20for%20Multisig%20Labs%20Team"
                >
                  <BiEnvelope />
                  hello@multisiglabs.org
                </a>
              </li>
              <li className="footer-details_border">
                <BiPhone />1 832-299-5626
              </li>
            </ul>
          </li>
          <li style={{ display: "none" }}>
            <div className="list-header">Legal</div>
            <ul className="footer-details">
              <li>Terms and Conditions</li>
            </ul>
          </li>
          <li className="f">
            <div className="list-header">Products</div>
            <ul className="footer-details flex flex-col ml-0">
              <li>
                <a href="https://www.gogopool.com/">GoGoPool</a>
              </li>
              <li>
                <a href="https://www.pandasia.io/">Pandasia</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="list-header">Company</div>
            <ul className="footer-details flex flex-col ml-0">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="https://twitter.com/GoGoPool_">
                Twitter
                </Link>
              </li>
              <li>
              <Link href="https://www.linkedin.com/company/gogopool">
                LinkedIn
                </Link>
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
