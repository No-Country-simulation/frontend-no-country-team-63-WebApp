import type { Metadata } from "next";

import "./style.css";
import { ContextProvider } from "@/_components/context/ContextProvider";
import CustomModalGeneral from "@/_components/modal/CustomModalGeneral";

export const metadata = {
  title: "Pet Health Tracker",
  description: "Controla la salud de tus mascotas",
  icons: {
    icon: "/logo-vet.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        
          <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
