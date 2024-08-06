import React from 'react';
import { Container, Title, Text, Grid, Card, Flex, Image } from '@mantine/core';
import styles from './WhyUs.module.css';

import reliable from '../../assets/reliability2f.jpg';
import exceptional from '../../assets/exceptional.png';
import support from '../../assets/support2.png';
import ray from '../../assets/Rayfeaturee.jpg';

const WhyUs: React.FC = () => {
  return (
    <section className={styles.whyUsSection}>
      <Container size="lg">
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, xs: 12, md: 8, lg: 8 }}>
            <Card shadow="sm" padding="lg" radius="md" className={styles.card}>
              <Title order={3} className={styles.cardTitle}>
                Reliable Systems at Affordable Prices
              </Title>
              <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="nowrap"
              >
                <Image radius="md" src={reliable} w={50} h={50} />
                <Text mt="md" ta="left" color="dimmed">
                  Our Fleet Management System has the highest reliability in our industry, with
                  MTTF(Mean Time To Failue) exceeding 40,000 hours. Our Systems are designed to run
                  24/7,and 365.
                </Text>
              </Flex>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" className={styles.card}>
              <Title order={3} className={styles.cardTitle}>
                Exceptional Solutions Provider
              </Title>

              <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="nowrap"
              >
                <Image radius="md" src={exceptional} w={50} h={50} />
                <Text mt="md" ta="left" color="dimmed">
                  FDS provides its customers with fully integrated solutions covering the whole Fuel
                  Management process. Our hardware manufacturing and Software expertise gives our
                  customers the most cost-effective solutions.
                </Text>
              </Flex>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" className={styles.card}>
              <Title order={3} className={styles.cardTitle}>
                Experienced Staff with Superb Support Services
              </Title>
              <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="nowrap"
              >
                <Image radius="md" src={support} w={50} h={50} />
                <Text mt="md" ta="left" color="dimmed">
                  Our Staff has over 25 years of Fleet Management Experience. Our Support Team to
                  our customers is among the Best in our industry.
                </Text>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 12, md: 4, lg: 4 }}>
            <Flex mih={50} gap="md" justify="center" align="center" direction="row" wrap="nowrap">
              <Image radius="md" src={ray} w={400} h={400} className={styles.image} />
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default WhyUs;
