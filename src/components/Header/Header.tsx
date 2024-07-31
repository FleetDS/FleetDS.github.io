import { Tabs, Image, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRef } from 'react';
import logo from '../../assets/fdslogo.png';
import styles from './Header.module.css'; // Ensure this file exists

// Define the type for the props
interface HeaderProps {
    onChange: (value: string | null) => void;
  }

export function Header({ onChange }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure();
  
  return (
    <div className={styles.headerContainer}>
      <Image
        h={50}
        w="auto"
        radius="md"
        src={logo}
        className={styles.logo}
      />
      <Tabs onChange={onChange} classNames={{ 
        tab: styles.tab,
      }}>
        <Tabs.List>
          <Tabs.Tab value="home">Home</Tabs.Tab>
          <Tabs.Tab value="products">Our Products</Tabs.Tab>
          <Tabs.Tab value="services">Services</Tabs.Tab>
          <Tabs.Tab value="why">Why Us</Tabs.Tab>
          <Tabs.Tab value="contact">Contact</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
}
