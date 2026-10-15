'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

export default function BackToHome() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Si estamos en la página de inicio, no renderiza nada
  if (isHome) return null;

  // Si estamos en cualquier otra página, muestra el enlace
  return (
    <div className={styles.backToHome}>
      <Link href="/">← Back to home</Link>
    </div>
  );
}