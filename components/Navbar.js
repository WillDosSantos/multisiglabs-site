import { BiBookOpen, BiAtom } from "react-icons/bi";
import { IconContext } from "react-icons";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className="navbar nav-responsive"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1em 2em",
        width: "100%",
      }}
    >
      <div
        className="nav-left"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Link href="/">
          <img src="logo-icon.svg" alt="Multisig Labs Logo" />
        </Link>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            marginLeft: "3em",
          }}
        >
          <li>
            <Link href="/products" style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "0.5em" }}>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiAtom />
                </IconContext.Provider>
              </span>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "0.5em" }}>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiBookOpen />
                </IconContext.Provider>
              </span>
              About
            </Link>
          </li>
        </ul>
      </div>

      <a
        className="btn btn--large"
        href="mailto:hello@multisiglabs.org?subject=New%20Message%20for%20Multisig%20Labs%20Team"
      >
        Connect
      </a>
    </div>
  );
}

export default Navbar;
