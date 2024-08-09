import { Burger, Image, Anchor } from '@mantine/core';
import { useState } from 'react';
import logo from '../../assets/home/fdslogo.png';
import logo1 from '../../assets/out-1.jpg'
import styles from './Header.module.css';

export function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <Anchor href="#/" className={styles.logoLink}>
        <Image h={70} w="auto" radius="md" src={logo1} className={styles.logo} />
      </Anchor>
      <Burger opened={opened} onClick={() => setOpened((o) => !o)} className={styles.burger} />
      <div className={`${styles.nav} ${opened ? styles.navVisible : styles.navHidden}`}>
        <Anchor href="/" className={styles.navLink} underline="never" fw={500} fz="xl">
          Home
        </Anchor>
        <Anchor href="#/products" className={styles.navLink} underline="never" fw={500} fz="xl">
          Our Products
        </Anchor>
        <Anchor href="#/contact" className={styles.navLink} underline="never" fw={500} fz="xl">
          Contact
        </Anchor>
      </div>
    </div>
  );
}
