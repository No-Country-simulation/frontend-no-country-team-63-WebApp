import type { Metadata } from "next";

import "./style.css";
import { ContextProvider } from "@/_components/context/ContextProvider";
<<<<<<< HEAD
import CustomModalGeneral from "@/_components/modal/CustomModalGeneral";

export const metadata = {
  title: "Pet Health Tracker",
  description: "Controla la salud de tus mascotas",
  icons: {
    icon: "/logo-vet.png",
  },
=======

export const metadata = {
  title: 'Pet Health Tracker',
  description: 'Controla la salud de tus mascotas',
  icons: {
    icon: "/logo-vet.png"
  }
>>>>>>> 77044f22932662201d86021b30c3507056ea3ce2
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={` antialiased`}>
        
          <ContextProvider>{children}</ContextProvider>
=======
      <body
        className={` antialiased`}
      >
        <ContextProvider>{children}</ContextProvider>
>>>>>>> 77044f22932662201d86021b30c3507056ea3ce2
      </body>
    </html>
  );
}
