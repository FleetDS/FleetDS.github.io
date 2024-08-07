import React from 'react';
import { Container, Grid, Paper, Text, Title, Anchor, AppShell } from '@mantine/core';
import styles from './FuelPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';
import ContactButton from '@/components/ContactButton/ContactButton';

const productLines = [
  {
    title: 'Fuel Island Controller',
    description:
      'Streamline your fuel dispensing operations with our advanced Fuel Island Controller. It offers real-time monitoring, and full weatherproofing. Perfect for any fuel island',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Handsfree Fueling',
    description:
      'Enhance convenience and safety with our Handsfree Fueling solution. Designed to reduce manual interaction, this system allows for automated fueling with minimal effort, ideal for speed and convenience',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Mobile Refueling',
    description:
      'Our Mobile Refueling system offers flexibility and efficiency for on-the-go fueling needs. Perfect for fleets and remote sites.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Fleet Management Software',
    description:
      'Optimize your fleet operations with our comprehensive Fleet Management Software. It provides real-time data, fuel tracking, maintenance alerts, and reporting tools to help you manage and reduce costs effectively.',
    image: 'https://via.placeholder.com/300',
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
        <Container className={styles.container}>
          <Title order={1} className={styles.header}>
            Fuel Management Systems
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
