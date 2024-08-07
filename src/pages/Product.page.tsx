import React from 'react';
import { Title, Paper, Text, Container, Grid, Anchor, AppShell } from '@mantine/core';
import styles from './ProductPage.module.css';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';

const categories = [
  {
    image: 'https://via.placeholder.com/200',
    description: 'Category 1 description. Learn more about our Category 1 products.',
    link: '#/products/fuel',
  },
  {
    image: 'https://via.placeholder.com/200',
    description: 'Category 2 description. Learn more about our Category 2 products.',
    link: '#/products/ev',
  },
  {
    image: 'https://via.placeholder.com/200',
    description: 'Category 3 description. Learn more about our Category 3 products.',
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
              <Grid.Col key={index} span={{ base: 12, xs: 12, sm: 4, md: 4, lg: 4 }}>
                <Paper shadow="sm" p="md" className={styles.categoryCard}>
                  <Anchor href={category.link}>
                    <img src={category.image} alt={`Category ${index + 1}`} className={styles.image} />
                  </Anchor>
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
