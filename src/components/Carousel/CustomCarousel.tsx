import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './CustomCarousel.module.css';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import banner1 from '../../assets/home/banner12to1.jpg';
import banner2 from '../../assets/home/banner2.webp';
import banner3 from '../../assets/home/banner2.jpg';
import banner4 from '../../assets/home/banner3.jpg';
import banner5 from '../../assets/home/AFS.jpg';
import fleet from '../../assets/home/out-2.png';
import tech from '../../assets/home/tech.webp';
import mobile from '../../assets/home/mobile.webp';
import safety from '../../assets/home/safety.webp';

const data = [
  {
    image: fleet,
    title: 'Streamline Your Fleet Operations',
    category: 'nature',
  },
  {
    image: safety,
    title: 'Safety First',
    category: 'beach',
  },
  {
    image: tech,
    title: 'Leverage Advanced Technology',
    category: 'nature',
  },
  {
    image: mobile,
    title: 'Manage Mobile Refueling',
    category: 'tourism',
  },
  {
    image: banner3,
    title: 'Exceptional Customer Support',
    category: 'nature',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="0px"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

export function CustomCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 8000 }));

  return (
    <Carousel
      slideSize="100%"
      align="start"
      slidesToScroll={1}
      loop
      withIndicators
      controlSize={40}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={classes}
    >
      {slides}
    </Carousel>
  );
}
