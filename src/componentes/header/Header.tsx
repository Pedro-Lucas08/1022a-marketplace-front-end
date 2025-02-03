import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h1>Marketplace</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="login-button">Login</button>
      </div>
    </header>
  );
}

export default Header;
