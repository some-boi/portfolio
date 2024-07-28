import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-links">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nav-bar-logo">
        <Link href="/">Lonely Dev</Link>
      </div>
    </nav>
  );
};

export default NavBar;
