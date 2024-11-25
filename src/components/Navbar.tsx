'use client'

import styles from '@/styles/navbar.module.css'
import Link from 'next/link'
import { useState } from 'react';

function Navbar (){
  const [isOpen, setIsOpen]=useState(false)
  const toggleSideBar = ()=>{
    setIsOpen (!isOpen)
  };
    return(
      <>
        <nav className={styles.navbar}>
            <div>
            <h1 className={styles.logo}>Portfolio</h1>
            </div>
            {/* Nav buttons */}
            <ul className={styles.unordered}>
                <li className={styles.links}>
                    <Link className={styles.page} href="/"> Home</Link>
                    <Link className={styles.page} href="/about"> About</Link>
                    <Link className={styles.page} href="/contact"> Contact</Link>
                </li>
            </ul>
            </nav>
{/* sidebar */}
            <nav className={styles.navSide}>
              <div>
            <h1 className={styles.logo}>Portfolio</h1>
            </div>
            <div>
            <button className={styles.hamburger} onClick={toggleSideBar}>{"\u2261"} </button>
            <div className={`${styles.sideBar} ${isOpen ? styles.open : ''}`}>
              <ul className={styles.navlinks}>
                <li><Link className={styles.link} href={"/"}>Home</Link></li>
                <li><Link className={styles.link} href={"/about"}>About</Link></li>
                <li><Link className={styles.link} href={"/contact"}>Contact</Link></li>
              </ul>
              <button className={styles.closeButton} onClick={toggleSideBar}> {"\u00D7"}</button>
            </div>
            </div>
            </nav>
            </>
)}
export default Navbar