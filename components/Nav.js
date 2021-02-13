import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/homepage">NODULES OF FLINT</Link>
        </li>
        <li>
          <Link href="/about">find out more...</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
