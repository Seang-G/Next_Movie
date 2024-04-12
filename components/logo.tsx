"use client"

import { useRef } from "react"
import styles from "../styles/logo.module.css"
import Link from "next/link";


export default function Logo({href}:{href:string}) {
  const containerFoc = useRef(null);
  
  function onMouseEnter() {
    containerFoc.current.classList.add(styles.hover_animate)
  }

  function onMouseLeave() {
    containerFoc.current.classList.remove(styles.hover_animate)
  }

  async function onClick() {
    containerFoc.current.classList.add(styles.click_animate)
    await new Promise(resolve => setTimeout(resolve, 100))
    containerFoc.current.classList.remove(styles.click_animate)
  }

  return (
    <Link 
      href={href}
      className={styles.container} 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      ref={containerFoc}
    >
      <div className={styles.logo} >
        <img src={"/images/NextMovie_icon_top.png"} alt="logo_top" className={styles.logo_top} />
        <img src={"/images/NextMovie_icon_bottom.png"} alt="logo_bottom" />
      </div>
    </Link>
  )
}