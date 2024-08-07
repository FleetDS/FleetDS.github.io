import React from 'react';
import { Title, Paper, Text, Container, Grid, Anchor, AppShell, Image } from '@mantine/core';
import styles from './ProductPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';

import fuel from '../assets/products/IMG_0397.jpg';
import electric from '../assets/products/electric.webp';
import gate from '../assets/products/IMG_7657.jpg';

const categories = [
  {
    image: fuel,
    title: 'Fuel Management',
    description:
      'Our Fuel Management category includes cutting-edge solutions designed to streamline and optimize fuel dispensing and tracking. Whether you need a sophisticated Fuel Island Controller for managing your fueling stations, Handsfree Fueling systems for enhanced convenience, Mobile Refueling solutions for flexibility, or comprehensive Fleet Management Software for overseeing your entire operation, our products offer unmatched reliability and efficiency.',
    link: '#/products/fuel',
  },
  {
    image: electric,
    title: 'Electric Vehicle',
    description:
      'Explore our Electric Vehicle category, where we provide specialized tools for managing and optimizing electric vehicle operations. Our EV Controller ensures seamless and efficient charging, while our Fleet Management Software helps you track performance, manage charging schedules, and enhance overall fleet efficiency. Perfect for transitioning to greener technologies and optimizing your EV fleet.',
    link: '#/products/ev',
  },
  {
    image: gate,
    title: 'Infrastructure',
    description:
      'The Infrastructure category offers essential solutions for automating and managing key operational aspects of your facilities. With products like our Car Wash Controller, you can efficiently handle car wash operations, while the Gate Controller provides secure and automated management of entry and exit points. These systems are designed to enhance the functionality and security of your infrastructure.',
    link: '#/products/infra',
  },
];

export function ProductPage() {
  useScrollToTop();
  const showHeader = useScrollHide();

  return (
    <AppShell header={{ height: 70, collapsed: !showHeader }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Container id="top" size="xl">
          <Title order={1} className={styles.header}>
            Fleet & Commercial Fueling Products
          </Title>
          <Grid>
            {categories.map((category, index) => (
              <Grid.Col key={index} span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 4 }}>
                <Paper shadow="sm" p="md" className={styles.categoryCard}>
                  <Anchor href={category.link}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={category.image}
                        className={styles.image}
                        h={290}
                        fit="cover"
                      />
                      <div className={styles.overlay}>
                        <Anchor href={category.link} className={styles.learnMore}>
                          Learn More
                        </Anchor>
                      </div>
                    </div>
                  </Anchor>
                  <Text mt="md" className={styles.title}>
                    {category.title}
                  </Text>
                  <Text mt="md" className={styles.description}>
                    {category.description}
                  </Text>
                  <Anchor href={category.link} className={styles.learnMoreLink}>
                    Learn More
                  </Anchor>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </AppShell.Main>
      <AppShell.Section>
        <div className={styles.divider}></div>
        <Footer />
      </AppShell.Section>
    </AppShell>
  );
}
