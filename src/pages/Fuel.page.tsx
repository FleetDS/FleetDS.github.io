import React from 'react';
import { Container, Paper, Text, Title, AppShell, Image } from '@mantine/core';
import styles from './FuelPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';
import ContactButton from '@/components/ContactButton/ContactButton';

import controller from '../assets/fuel/IMG_6342.png'
import handsfree from '../assets/fuel/IMG_1614.jpg'
import mobile from '../assets/fuel/IMG_1993.jpg'
import software from '../assets/fuel/out-3.jpg'

const productLines = [
  {
    title: 'Fuel Island Controller',
    description:
      'Streamline your fuel dispensing operations with our advanced Fuel Island Controller. It offers real-time monitoring, and full weatherproofing. Perfect for any fuel island.',
    image: controller,
  },
  {
    title: 'Handsfree Fueling',
    description:
      'Enhance convenience and safety with our Handsfree Fueling solution. Designed to reduce manual interaction, this system allows for automated fueling with minimal effort, ideal for speed and convenience.',
    image: handsfree,
  },
  {
    title: 'Mobile Refueling',
    description:
      'Our Mobile Refueling system offers flexibility and efficiency for on-the-go fueling needs. Perfect for fleets and remote sites.',
    image: mobile,
  },
  {
    title: 'Fleet Management Software',
    description:
      'Optimize your fleet operations with our comprehensive Fleet Management Software. It provides real-time data, fuel tracking, maintenance alerts, and reporting tools to help you manage and reduce costs effectively.',
    image: software,
  },
];

export function FuelPage() {
  useScrollToTop();
  const showHeader = useScrollHide();

  return (
    <AppShell header={{ height: 70, collapsed: !showHeader }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Title order={1} className={styles.header}>
          Fuel Management Systems
        </Title>
        <Container className={styles.productSection}>
          {productLines.map((product, index) => (
            <Paper
              key={index}
              shadow="sm"
              className={`${styles.productCard} ${index % 2 === 0 ? styles.leftText : styles.rightText}`}
            >
              <div className={styles.textSection}>
                <Text mt="md" className={styles.title}>
                  {product.title}
                </Text>
                <Text mt="md" className={styles.description}>
                  {product.description}
                </Text>
              </div>
              <div className={styles.imageSection}>
                <Image src={product.image} h={300} fit="contain" className={styles.image} />
              </div>
            </Paper>
          ))}
        </Container>

        <Container className={styles.contactSection}>
          <ContactButton />
        </Container>
      </AppShell.Main>

      <AppShell.Section>
        <div className={styles.divider}></div>
        <Footer />
      </AppShell.Section>
    </AppShell>
  );
}
