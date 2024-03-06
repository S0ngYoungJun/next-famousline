'use client';
import Link from 'next/link';
import styles from "@/styles/genrelink.module.scss"

const links = [
  { name: 'Home', href: '/' },
  { name: '역사', href: '/history' },
  { name: '액션', href: '/action' },
  { name: '애니메이션', href: '/animation' },
  { name: '판타지', href: '/fantasy'}
];

export default function NavLinks() {

  return (
    <div className={styles.side}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={styles.linkname}
        >
         {link.name}
        </Link>
      ))}
    </div>
  );
}