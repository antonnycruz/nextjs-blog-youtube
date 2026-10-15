'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import utilStyles from './utils.module.css';
import styles from './layout.module.css';

const name = 'blueweeb';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      <header className={styles.header}>
        {isHome ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      {/* ✅ El menú va justo DEBAJO del header */}
      <nav className="mb-4 text-center">
        <Link href="/">Inicio | </Link>
        <Link href="/blog">Blog | </Link>
        <Link href="/about/contact">Contacto | </Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
}