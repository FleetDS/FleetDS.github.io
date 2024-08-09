import { Image, Anchor } from '@mantine/core';
import logo1 from '../../assets/out-3.jpg';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <Anchor href="#/" className={styles.logoLink}>
        <Image radius="md" src={logo1} className={styles.logo} />
      </Anchor>
      <div className={styles.nav}>
        <Anchor href="/" className={styles.navLink} underline="never" fw={500}>
          Home
        </Anchor>
        <Anchor href="#/products" className={styles.navLink} underline="never" fw={500}>
          Our Products
        </Anchor>
        <Anchor href="#/contact" className={styles.navLink} underline="never" fw={500}>
          Contact
        </Anchor>
      </div>
    </div>
  );
}
