"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface NavItem {
  id: number;
  data: string;
  icon: string;
  path: string;
}

interface Props {
  items: NavItem[];
}


export default function NavBar_logged({ items }: Props) {
    const [openMenu, setOpenMenu] = useState(false);
    const router = useRouter();

    // Datos temporales del usuario (luego vendrá del backend)
    const user = {
        name: "Juan Pérez",
        photo: "/profile_photo.png",
    };

    const [fadeOut, setFadeOut] = useState(false);

    const handleLogout = () => {
    setFadeOut(true);      // activa animación
    setTimeout(() => {
        router.push("/");    // redirige después de 400ms
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
                {items.map((item) => (
                    <li key={item.id} className="nav-item">
                    <Link href={item.path} className="nav-link">
                        <div className="icon-text !text-white">
                        <img src={`/${item.icon}`} alt={item.data} className="nav-icon" />
                        <span>{item.data}</span>
                        </div>
                    </Link>
                    </li>
                ))}
                </ul>

                {/*Usuario (foto + dropdown)*/}
                <div className="user-section">
                    <div
                        className="user-info"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <img src={user.photo} className="profile-pic" />
                        <span className="username">{user.name}</span>
                    </div>

                    {openMenu && (
                        <div className="dropdown-menu">
                            <Link href="/profile" className="dropdown-item">Inicio</Link>
                            <Link href="/settings" className="dropdown-item">Registro salud</Link>
                            <Link href="/profile" className="dropdown-item">Nutrición</Link>
                            <Link href="/settings" className="dropdown-item">Notificación</Link>
                            <div className="flex justify-center">
                                <hr className="border-t-2 border-gray-400 w-[85%]"></hr>
                                <hr></hr>
                            </div>
                            <Link href="/profile" className="dropdown-item">Ver perfil</Link>
                            <Link href="/settings" className="dropdown-item">Configuración</Link>
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
