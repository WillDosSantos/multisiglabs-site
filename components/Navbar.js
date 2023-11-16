function Navbar() {
  return (
    <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1em 2em' }}>
      <div className="nav-left" style={{ display: 'flex',  alignItems: 'center' }}>
        <img src="logo-icon.svg" alt="Multisig Labs Logo" />
        <ul style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
          <li>Products</li>
          <li>Consulting</li>
        </ul>
      </div>

      <button>Connect</button>
    </div>
  );
}

export default Navbar;
