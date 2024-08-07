import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text, Image } from '@mantine/core';
import styles from './Services.module.css';
import fueling from '../../assets/services/gas-station.png';
import mobile from '../../assets/services/mtanker3.png';
import monitor from '../../assets/services/fuelmonitor7b.png';
import software from '../../assets/services/creativity2.png';
import carwash from '../../assets/services/out-0.webp';
import gate from '../../assets/services/out-1.webp';
import { useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const data = [
  {
    image: fueling,
    title: 'Fuel System Installation',
    des: 'Our Fuel System Installation service ensures seamless integration with gas dispensers, CNG, propane, and DEF systems, optimizing fuel management at your fueling stations.',
  },
  {
    image: mobile,
    title: 'Mobile Tanker Fuel System Installation',
    des: 'We provide advanced Mobile Tanker Fuel System installations featuring RFID technology and wireless handheld devices for efficient and secure fueling authorization.',
  },
  {
    image: monitor,
    title: 'Tank Monitor Installation',
    des: 'Our Tank Monitor Installation service includes installing probes in tanks and integrating with various monitoring systems like Veeder-Root for accurate fuel level tracking.',
  },
  {
    image: software,
    title: 'Fleet Management Software',
    des: 'We develop custom Fleet Management Software tailored to interface with various fleet systems, providing comprehensive solutions for fleet tracking and management.',
  },
  {
    image: gate,
    title: 'Gate Installation',
    des: 'Our Gate Installation service includes the setup of advanced access control systems to enhance security and manage entry to your facilities efficiently.',
  },
  {
    image: carwash,
    title: 'Carwash Installation',
    des: 'We specialize in installing carwash systems and integrating them with custom software solutions for efficient operation and management of your carwash services.',
  },
];

interface CardProps {
  image: string;
  title: string;
  des: string;
}

function Card({ image, title, des }: CardProps) {
  return (
    <Paper shadow="md" p="xl" style={{}} className={styles.card}>
      <div>
        <Image src={image} h={50} w={50} className={styles.image} />
      </div>
      <Title order={1} className={styles.title}>
        {title}
      </Title>
      <Text size="md" className={styles.description}>
        {des}
      </Text>
    </Paper>
  );
}

export function Services() {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isMediumScreen = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const slidesToScroll = isSmallScreen ? 1 : isMediumScreen ? 2 : 4;
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 6000 }));

  return (
    <div className={styles.container}>
      <div className={styles.services}>
        <Carousel
          slideGap="lg"
          slideSize="25%"
          align="center"
          slidesToScroll={slidesToScroll}
          loop
          skipSnaps
          controlSize={40}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          classNames={{
            control: `${styles.control}`,
            root: `${styles.root}`,
          }}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
}
