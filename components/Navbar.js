function Navbar() {
  return (
    <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1em 2em' }}>
      <div className="nav-left" style={{ display: 'flex',  alignItems: 'center' }}>
        <img src="logo-icon.svg" alt="Multisig Labs Logo" />
        {/*<ul style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
          <li>Products</li>
          <li>Consulting</li>
        </ul>*/}
      </div>

      <a className="btn btn--large" href="mailto:hello@multisiglabs.org?subject=New%20Message%20for%20Multisig%20Labs%20Team">Connect</a>
    </div>
  );
}

export default Navbar;
