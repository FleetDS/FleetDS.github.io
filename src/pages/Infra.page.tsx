import React from 'react';
import { Container, Grid, Paper, Text, Title, Anchor, AppShell } from '@mantine/core';
import styles from './InfraPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';

const productLines = [
  {
    title: 'Fuel Monitoring Systems',
    description: 'Advanced solutions for real-time fuel monitoring and management.',
    image: 'https://via.placeholder.com/300',
    link: '/fuel-monitoring',
  },
  {
    title: 'Fleet Tracking Solutions',
    description: 'Comprehensive tracking solutions for managing your fleet efficiently.',
    image: 'https://via.placeholder.com/300',
    link: '/fleet-tracking',
  },
  {
    title: 'Analytics and Reporting',
    description: 'Detailed analytics and reporting tools to optimize fuel usage and costs.',
    image: 'https://via.placeholder.com/300',
    link: '/analytics-reporting',
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
        <Container>
          <Title order={1} className={styles.header}>
            Our Infrastructure Systems
          </Title>
          <Grid>
            {productLines.map((product, index) => (
              <Grid.Col key={index} span={4}>
                <Paper shadow="sm" className={styles.productCard}>
                  <a href={product.link}>
                    <img src={product.image} alt={product.title} className={styles.image} />
                  </a>
                  <Text mt="md" className={styles.title}>
                    {product.title}
                  </Text>
                  <Text mt="md" className={styles.description}>
                    {product.description}
                  </Text>
                  <Anchor href={product.link} className={styles.learnMoreLink}>
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
