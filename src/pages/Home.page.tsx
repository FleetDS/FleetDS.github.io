import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { AppShell, Burger, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../assets/fdslogo.png';
import styles from './HomePage.module.css';
import { Header } from '@/components/Header/Header';
import { useRef } from 'react';
import { CustomCarousel } from '@/components/Carousel/CustomCarousel';
import { Services } from '@/components/Services/Services';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export function HomePage() {
  const sectionRefs: SectionRefs = {
    home: useRef<HTMLDivElement>(null),
    products: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header>
        <Header/>
      </AppShell.Header>

      <AppShell.Main>
        <div>
          <div ref={sectionRefs.home} className={styles.section}>
            <CustomCarousel />
            <Text className={styles.header} fw={500}>Services</Text>
            <Services/>
          </div>
          <div ref={sectionRefs.products} className={styles.section}>
            Content for products
          </div>
          <div ref={sectionRefs.contact} className={styles.section}>
            Content for contact
          </div>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
