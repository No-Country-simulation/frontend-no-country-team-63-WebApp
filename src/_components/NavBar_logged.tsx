"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { nav_data_pet } from "@/mock/mock";

export default function NavBar_logged() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const path = usePathname();
  // Datos temporales del usuario (luego vendrá del backend)
  const user = {
    name: "Juan Pérez",
    photo: "/profile_photo.png",
  };

  const [fadeOut, setFadeOut] = useState(false);

  const handleLogout = () => {
    setFadeOut(true); // activa animación
    setTimeout(() => {
      
      router.push("/"); // redirige después de 400ms
    }, 400);
  };

  return (
    <nav className="navbar !bg-[#1A5D63]">
      <div className={`nav-container ${fadeOut ? "fade-out" : ""}`}>
        {/* Logo */}
        <div className="nav-left">
          <img src={"/logo_alt.png"} className="logo" />
          <h1 className="brand !text-[#E8E8E8]">Pet Health Tracker</h1>
        </div>

        {/* Links dinámicos */}
        <ul className="nav-links">
          {nav_data_pet.map((item) => (
            <li key={item.id} className="nav-item">
              <Link href={item.path} className="nav-link">
                <div
                  className={`icon-text text-[#919090]  ${
                    path === item.path && "text-[#fff] decoration-1 decoration-[#fff] decoration-dotted"
                  }`}
                >
                  <img
                    src={`/${item.icon}`}
                    alt={item.data}
                    className="nav-icon"
                  />
                  <span>{item.data}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/*Usuario (foto + dropdown)*/}
        <div className="user-section">
          <div className="user-info" onClick={() => setOpenMenu(!openMenu)}>
            <img src={user.photo} className="profile-pic" />
            <span className="username">{user.name}</span>
          </div>

          {openMenu && (
            <div className="dropdown-menu">
              {nav_data_pet.map((e) => (
                <Link key={e.id} href={e.path} className="dropdown-item">
                  {" "}
                  {e.data}
                </Link>
              ))}
              <div className="flex justify-center">
                <hr className="border-t-2 border-gray-400 w-[85%]"></hr>
                <hr></hr>
              </div>
              <Link href="/perfil" className="dropdown-item">
                Ver perfil
              </Link>
              <Link href="/configuracion" className="dropdown-item">
                Configuración
              </Link>
              <button onClick={handleLogout} className="dropdown-item logout">
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
