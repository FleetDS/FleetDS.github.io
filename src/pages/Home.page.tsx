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
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';
import WhyUs from '@/components/WhyUs/WhyUs';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export function HomePage() {
  useScrollToTop();
  const showHeader = useScrollHide();
  const sectionRefs: SectionRefs = {
    home: useRef<HTMLDivElement>(null),
    service: useRef<HTMLDivElement>(null),
    whyus: useRef<HTMLDivElement>(null),
  };

  return (
    <AppShell
      header={{ height: 90, collapsed: !showHeader }}
      styles={(theme) => ({
        main: {
          paddingTop: 90, // Adjust for header height
        },
      })}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <div ref={sectionRefs.home}>
          <div className={styles.carouselContainer}>
            <div id="carousel" ref={sectionRefs.carousel} className={styles.carousel}>
              <CustomCarousel />
            </div>
          </div>
          <div className={styles.content}>
            <div id="service" ref={sectionRefs.service} className={styles.section}>
              <Text className={styles.header} fw={500}>
                Services
              </Text>
              <Services />
            </div>
            <div id="whyus" ref={sectionRefs.whyus} className={styles.WhyUsSection}>
              <Text className={styles.header} fw={500}>
                Why Us?
              </Text>
              <WhyUs />
            </div>
          </div>
        </div>
      </AppShell.Main>

      <AppShell.Section>
        <div className={styles.divider}></div>
        <Footer />
      </AppShell.Section>
    </AppShell>
  );
}
