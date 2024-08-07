import React from 'react';
import { Title, Paper, Text, Container, Grid, AppShell } from '@mantine/core';
import styles from './ProductPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';

const products = [
  {
    image: 'https://via.placeholder.com/200',
    description: 'Product 1 description',
  },
  {
    image: 'https://via.placeholder.com/200',
    description: 'Product 2 description',
  },
  {
    image: 'https://via.placeholder.com/200',
    description: 'Product 3 description',
  },
  {
    image: 'https://via.placeholder.com/200',
    description: 'Product 4 description',
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
        <Container id="top">
          <Title order={1} className={styles.header}>
            Products
          </Title>
          <Grid>
            {products.map((product, index) => (
              <Grid.Col key={index} span={3}>
                <Paper shadow="sm" p="md" className={styles.productCard}>
                  <img src={product.image} alt={`Product ${index + 1}`} className={styles.image} />
                  <Text mt="md" className={styles.description}>
                    {product.description}
                  </Text>
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
