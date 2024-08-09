import React from 'react';
import { Container, Grid, Paper, Text, Title, Anchor, AppShell } from '@mantine/core';
import styles from './InfraPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';
import ContactButton from '@/components/ContactButton/ContactButton';

import wash from '../assets/infra/IMG_6315.jpg';
import gate from '../assets/infra/IMG_7669.jpg';

const productLines = [
  {
    title: 'Car Wash Controller',
    description: 'Automate and manage your car wash operations with our Car Wash Controller. It offers intuitive control over wash cycles, payment processing, and customer interactions, ensuring a smooth and efficient car wash experience.',
    image: wash,
  },
  {
    title: 'Gate Controller',
    description: 'Secure and streamline access with our Gate Controller. It provides automated control of entry and exit points, integrates with various security systems, and offers real-time monitoring and management capabilities.',
    image: gate,
  },
];

export function InfraPage() {
    useScrollToTop();
    const showHeader = useScrollHide();
  
    return (
      <AppShell header={{ height: 90, collapsed: !showHeader }}>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
  
        <AppShell.Main>
          <Title order={1} className={styles.header}>
            Infrastructure Management
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
                  <img src={product.image} alt={product.title} className={styles.image} />
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