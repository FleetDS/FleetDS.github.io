import React from 'react';
import { Title, Paper, Text, Container, Grid, AppShell } from '@mantine/core';
import styles from './ProductPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

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
  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header>
        <Header/>
      </AppShell.Header>

      <AppShell.Main>
    <Container>
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
        <Footer/>
      </AppShell.Section>
    </AppShell>
  );
}
