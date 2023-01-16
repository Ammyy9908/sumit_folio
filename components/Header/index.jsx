import React from "react";
import styles from "./index.module.css";
function Header() {
  return (
    <div className={`${styles.header}`}>
      <div
        className={`${styles.header__wrapper} mx-auto flex  md:flex-row flex-col justify-center md:justify-between items-center`}
        style={{
          width: "85%",
          height: "100%",
        }}
      >
        <a href="#" className="dark:text-white">
          Sumit
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-3">
            <li>
              <a className="underline dark:text-white" href="#">
                About
              </a>
            </li>
            <li>
              <a className="underline dark:text-white" href="#">
                Work
              </a>
            </li>
            <li>
              <a className="underline dark:text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
