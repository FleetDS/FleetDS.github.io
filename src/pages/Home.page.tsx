import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { AppShell, Burger, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../assets/fdslogo.png';
import styles from './HomePage.module.css';
import { Header } from '@/components/Header/Header';
import { useRef } from 'react';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export function HomePage() {
  const sectionRefs: SectionRefs = {
    home: useRef<HTMLDivElement>(null),
    products: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    why: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const handleTabChange = (value: string | null): void => {
    const offset = 70; // Adjust this value to set the desired offset
    if (value && sectionRefs[value]?.current) {
      const element = sectionRefs[value].current;

      // Get the element's position relative to the document
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

      // Scroll to the element position with an offset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppShell header={{ height: 70 }} padding="md">
      <AppShell.Header>
        <Header onChange={handleTabChange} />
      </AppShell.Header>

      <AppShell.Main>
        <div>
          <div ref={sectionRefs.home} className={styles.section}>
            Content for home
          </div>
          <div ref={sectionRefs.products} className={styles.section}>
            Content for products
          </div>
          <div ref={sectionRefs.services} className={styles.section}>
            Content for services
          </div>
          <div ref={sectionRefs.why} className={styles.section}>
            Content for why
          </div>
          <div ref={sectionRefs.contact} className={styles.section}>
            Content for contact
          </div>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
