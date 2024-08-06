import React from 'react';
import { Container, Text, Anchor, Group, Stack, Paper } from '@mantine/core';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <Paper className={styles.footer}>
      <Container>
        <Stack>
          <Group>
            <Anchor href="/" className={styles.link} underline="never">
              Home
            </Anchor>
            <Anchor href="#/products#top" className={styles.link} underline="never">
              Our Products
            </Anchor>
            <Anchor href="#/contact#top" className={styles.link} underline="never">
              Contact
            </Anchor>
          </Group>

          <Group>
            <Anchor
              href="https://www.linkedin.com/company/fleet-data-systems"
              target="_blank"
              className={styles.icon}
            >
              <FaLinkedin size={24} />
            </Anchor>
          </Group>

          <Group>
            <Text size="sm" className={styles.contact}>
              <Anchor
                href="https://www.google.com/maps/place/1650+S+Amphlett+Blvd+UNIT+108,+San+Mateo,+CA+94402/@37.5594662,-122.3034163,16z/data=!3m1!4b1!4m6!3m5!1s0x808f9e8ccb3974e3:0xe4ff185b4355d5a1!8m2!3d37.5594662!4d-122.3034163!16s%2Fg%2F11n09cfznh?entry=ttu"
                className={styles.contact}
                target="_blank"
              >
                1650 S. Amphlett Blvd., Suite 108, San Mateo, California 94402
              </Anchor>
            </Text>
            <Text size="sm">
              Email:{' '}
              <Anchor href="mailto:client@fleetds.com" className={styles.contact}>
                client@fleetds.com
              </Anchor>
            </Text>
            <Text size="sm">
              Office:{' '}
              <Anchor href="tel:+6506184681" className={styles.contact}>
                (650) 618-4681
              </Anchor>
            </Text>
          </Group>
        </Stack>
      </Container>
    </Paper>
  );
};

export default Footer;
