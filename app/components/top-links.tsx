'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "@/styles/toplink.module.scss"

const links = [
  { name: '세탁', href: '/subproduct' },
  { name: '정리/수납', href: '/customer' },
  { name: '청소', href: '/customer' },
];

export default function TopNavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'}
        >
          <p className={`${styles.linkname}`}>{link.name}</p>
        </Link>
      ))}
    </>
  );
}