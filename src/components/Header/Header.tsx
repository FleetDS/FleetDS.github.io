import { Image} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRef } from 'react';
import logo from '../../assets/fdslogo.png';
import styles from './Header.module.css'; // Ensure this file exists

export function Header() {
  
  return (
    <div className={styles.headerContainer}>
      <Image
        h={50}
        w="auto"
        radius="md"
        src={logo}
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/products" className={styles.navLink}>Our Products</a>
        <a href="/contact" className={styles.navLink}>Contact</a>
      </nav>
    </div>
  );
}
