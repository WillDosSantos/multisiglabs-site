import { BiBookOpen, BiAtom, BiEnvelope } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  return (
    <div
      className="navbar nav-responsive"
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
            <Link
              href="/products"
              style={{ display: "flex", alignItems: "center", color: router.pathname === "/products" ? "#FFFFFF" : "inherit" }}
            >
              <span style={{ marginRight: "0.5em" }}>
                <BiAtom />
              </span>
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              style={{ display: "flex", alignItems: "center", color: router.pathname === "/about" ? "#FFFFFF" : "inherit" }}
            >
              <span style={{ marginRight: "0.5em" }}>
                <BiBookOpen />
              </span>
              About
            </Link>
          </li>
        </ul>
      </div>

      <a
        className="btn btn--large"
        style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        href="mailto:hello@multisiglabs.org?subject=New%20Message%20for%20Multisig%20Labs%20Team"
      >
        <BiEnvelope />
        Contact
      </a>
    </div>
  );
}

export default Navbar;
