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
            <Anchor href="#/products" className={styles.link} underline="never">
              Our Products
            </Anchor>
            <Anchor href="#/contact" className={styles.link} underline="never">
              Contact
            </Anchor>
          </Group>

          <Group>
            <Anchor href="https://www.linkedin.com/company/fleet-data-systems" target="_blank" className={styles.icon}>
              <FaLinkedin size={24} />
            </Anchor>
          </Group>

          <Group>
            <Text size="sm" color="dimmed">
              1650 S. Amphlett Blvd., Suite 108, San Mateo, California 94402
            </Text>
            <Text size="sm">
              Email: <Anchor href="mailto:client@fleetds.com">client@fleetds.com</Anchor>
            </Text>
            <Text size="sm">
              Office: <Anchor href="tel:+6506184681">(650) 618-4681</Anchor>
            </Text>
          </Group>
        </Stack>
      </Container>
    </Paper>
  );
};

export default Footer;
