import { Burger, Image} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRef, useState } from 'react';
import logo from '../../assets/fdslogo.png';
import styles from './Header.module.css'; // Ensure this file exists

export function Header() {
  const [opened, setOpened] = useState(true);

  return (
    <div className={styles.headerContainer}>
      <Image
        h={50}
        w="auto"
        radius="md"
        src={logo}
        className={styles.logo}
      />
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        className={styles.burger}
      />
      <nav className={styles.nav} style={{ display: opened ? 'flex' : 'none' }}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="#/products" className={styles.navLink}>Our Products</a>
        <a href="#/contact" className={styles.navLink}>Contact</a>
      </nav>
    </div>
  );
}
