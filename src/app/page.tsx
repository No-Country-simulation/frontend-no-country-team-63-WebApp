"use client";

import LoginBox from "@/_components/loginbox";
import Navbar from "@/_components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h2>Bienvenido a pet health tracker</h2>
            <p>Cuidamos lo que mas quieres</p>
          </div>

          <LoginBox />
        </div>
      </section>
    </>
  );
}
