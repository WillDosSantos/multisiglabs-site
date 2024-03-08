import { BiBookOpen, BiEnvelope, BiMapPin, BiPhone } from "react-icons/bi";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        className="nav-left nav-responsive"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <img
          data-aos="fade-up"
          src="../msl-logo.svg"
          alt="Multisig Labs Logo"
          style={{ maxWidth: "272px" }}
        />
        <ul
          style={{
            display: "flex",
            alignItems: "flex-start",
            columnGap: "5em",
            marginLeft: "8em",
          }}
        >
          <li>
            <div class="list-header">Contact</div>
            <ul className="footer-details">
              <li className="footer-details_border">
                <BiMapPin />
                2000 Hughes Landing Blvd.
                <br />
                The Woodlans, TX. 77034
              </li>
              <li className="footer-details_border">
                <a style={{ display: "flex", columnGap: "10px" }} href="mailto:hello@multisiglabs.org?subject=New%20Message%20for%20Multisig%20Labs%20Team">
                  <BiEnvelope />
                  hello@multisiglabs.org
                </a>
              </li>
              <li className="footer-details_border">
                <BiPhone />1 832-299-5626
              </li>
            </ul>
          </li>
          <li>
            <div class="list-header">Legal</div>
            <ul className="footer-details">
              <li>Terms and Conditions</li>
            </ul>
          </li>
          <li>
            <div class="list-header">Products</div>
            <ul className="footer-details">
              <li>GoGoPool</li>
              <li>Pandasia</li>
            </ul>
          </li>
          <li>
            <div class="list-header">Company</div>
            <ul className="footer-details">
              <li>About</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
