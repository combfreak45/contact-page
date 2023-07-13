import React from 'react'
import styles from './Navigation.module.css'
function Navigation() {
  return (
    <nav className={`${styles.nav} container`}>
      <img src="/images/img1.png" alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation
