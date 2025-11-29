// app/layout.tsx
import './globals.css'; // ajusta ruta si pones styles en otra carpeta
import React from 'react';

export const metadata = {
  title: 'Pet Health Tracker',
  description: 'Controla la salud de tus mascotas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
