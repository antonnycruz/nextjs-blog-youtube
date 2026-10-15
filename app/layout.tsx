import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import BackToHome from "./BackToHome"; // 1. Importas tu nuevo componente
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js | mi sitio web",
  description: "Descripcion de mi sitio web",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className={styles.container}>
          {/* Encabezado y menú */}
          <Header />

          {/* Contenido principal de la vista actual */}
          <main>{children}</main>

          {/* Enlace para regresar al inicio (solo visible en subpáginas) */}
          <BackToHome />
        </div>
      </body>
    </html>
  );
}