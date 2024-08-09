import React from 'react';
import { Container, Grid, Paper, Text, Title, Anchor, AppShell } from '@mantine/core';
import styles from './EVPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';
import ContactButton from '@/components/ContactButton/ContactButton';

const productLines = [
  {
    title: 'EV Charge Controller',
    description:
      'Manage and monitor electric vehicle charging with our EV Controller. It offers seamless integration with various charging stations, providing real-time usage data, scheduling, and remote management features.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Fleet Management Software',
    description:
      'Our Fleet Management Software for EVs provides specialized tools for managing electric vehicles. Track battery status, optimize charging schedules, and analyze performance to enhance fleet efficiency and reduce operational costs.',
    image: 'https://via.placeholder.com/300',
  },
];

export function EVPage() {
  useScrollToTop();
  const showHeader = useScrollHide();

  return (
    <AppShell header={{ height: 90, collapsed: !showHeader }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Container className={styles.container}>
          <Title order={1} className={styles.header}>
            Electric Vehicle Systems
          </Title>
          <Grid>
            {productLines.map((product, index) => (
              <Grid.Col key={index} span={4}>
                <Paper shadow="sm" className={styles.productCard}>
                  <img src={product.image} alt={product.title} className={styles.image} />
                  <Text mt="md" className={styles.title}>
                    {product.title}
                  </Text>
                  <Text mt="md" className={styles.description}>
                    {product.description}
                  </Text>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
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
