'use client'

import styles from "@/styles/topbar.module.scss";
import Link from "next/link";
import TopNav from "@/app/components/topnav";

export default function Topbar() {
  
  return (
    <div className={styles.topbar}>
      <div className={styles.div1}>
        <Link href="/" >Life</Link>
      </div>
      <div className={styles.div2}>
        <TopNav/>
      </div>
      <div className={styles.div3}>
      </div>
    </div>
  );
}
