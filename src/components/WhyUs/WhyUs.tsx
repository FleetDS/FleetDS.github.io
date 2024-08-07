import React from 'react';
import { Container, Title, Text, Grid, Card, Flex, Image } from '@mantine/core';
import styles from './WhyUs.module.css';

import reliable from '../../assets/home/reliability2f.jpg';
import exceptional from '../../assets/home/exceptional.png';
import support from '../../assets/home/support2.png';
import ray from '../../assets/home/Rayfeaturee.jpg';
import gear from '../../assets/home/gear.webp';

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
                  Our Fleet Management Systems boast exceptional reliability, with a Mean Time To
                  Failure (MTTF) exceeding 40,000 hours. Designed for continuous operation, our
                  systems ensure seamless performance 24/7, 365 days a year. We offer top-tier
                  reliability at competitive prices, making high-quality fleet management accessible
                  and cost-effective for all businesses.
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
                  FDS delivers comprehensive, integrated solutions for the entire fuel management
                  process. Combining cutting-edge hardware with advanced software, we offer
                  cost-effective, customized solutions that optimize your operations and meet your
                  specific needs. Our expertise ensures seamless integration and reliable
                  performance, providing you with the best tools to manage your fuel efficiently and
                  effectively.
                </Text>
              </Flex>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" className={styles.card}>
              <Title order={3} className={styles.cardTitle}>
                Industry Best Support
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
                  With over 25 years of expertise in fleet management, our team at Fleet Data
                  Systems (FDS) is dedicated to providing top-notch support. Our experienced
                  professionals are adept at addressing your needs swiftly and effectively, ensuring
                  your systems run smoothly. We offer responsive, knowledgeable assistance and
                  proactive maintenance to keep your operations at peak performance, building
                  strong, long-term relationships with our clients through exceptional service.
                </Text>
              </Flex>
            </Card>
            <Card shadow="sm" padding="lg" radius="md" className={styles.card}>
              <Title order={3} className={styles.cardTitle}>
                Custom Built Solutions
              </Title>
              <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="nowrap"
              >
                <Image radius="md" src={gear} w={50} h={50} />
                <Text mt="md" ta="left" color="dimmed">
                  Our custom solutions are built with flexibility and scalability in mind, allowing
                  you to adapt to changing demands and future growth. With over 25 years of
                  experience in fleet management, we leverage our deep industry knowledge to deliver
                  solutions that not only meet but exceed your expectations. Our commitment to
                  innovation and excellence ensures that you receive a product designed to enhance
                  your operational efficiency and drive success.
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
