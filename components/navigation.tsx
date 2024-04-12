"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/navigation.module.css"
import Logo from "./logo";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      {/* <Logo /> */}
    </nav>
  )
}