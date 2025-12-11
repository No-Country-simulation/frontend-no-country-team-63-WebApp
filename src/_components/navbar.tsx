"use client";

import { nav_data } from "@/_mock/mock";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <img src={'/logo-vet.png'}></img>
          <h1 className="brand">Pet Health Tracker</h1>
        </div>

        <button className="hamburger" id="hamburgerBtn">☰</button>

        <ul className="nav-links" id="navLinks">
          {nav_data.map(e => (
            <li key={e.id}>
              <a href="#">{e.data}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
