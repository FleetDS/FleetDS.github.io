import React from 'react';
import { Container, Grid, Paper, Text, Title, Anchor, AppShell } from '@mantine/core';
import styles from './InfraPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';
import ContactButton from '@/components/ContactButton/ContactButton';

const productLines = [
  {
    title: 'Car Wash Controller',
    description: 'Automate and manage your car wash operations with our Car Wash Controller. It offers intuitive control over wash cycles, payment processing, and customer interactions, ensuring a smooth and efficient car wash experience.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Gate Controller',
    description: 'Secure and streamline access with our Gate Controller. It provides automated control of entry and exit points, integrates with various security systems, and offers real-time monitoring and management capabilities.',
    image: 'https://via.placeholder.com/300',
  },
];

export function InfraPage() {
  useScrollToTop();
  const showHeader = useScrollHide();

  return (
    <AppShell header={{ height: 70, collapsed: !showHeader }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Container className={styles.container}>
          <Title order={1} className={styles.header}>
            Infrastructure Systems
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
