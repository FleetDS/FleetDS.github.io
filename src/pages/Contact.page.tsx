import { AppShell, Grid, Paper, Title, Text } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Header } from '../components/Header/Header';
import { ContactForm } from '../components/ContactForm/ContactForm';
import styles from './ContactPage.module.css';
import Footer from '@/components/Footer/Footer';
import useScrollToTop from '@/hooks/useScrolltoTop';
import { useScrollHide } from '@/hooks/useScrollHide';

export function ContactPage() {
  useScrollToTop();
  const theme = useMantineTheme();
  const contactInfo = {
    email: 'client@fleetds.com',
    address: '1650 S. Amphlett Blvd, Suite 108, San Mateo, California 94402',
    phone: 'Office: 650-618-4681',
  };

  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <div id="top" className={styles.container}>
          <Title order={3} className={styles.header}>
            Contact Us
          </Title>
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, xs: 12, md: 8, lg: 8 }}>
              <ContactForm />
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 4, lg: 4 }}>
              <Paper shadow="xs" radius="md" className={styles.paper}>
                <Title order={3} className={styles.subheader}>
                  Contact Information
                </Title>
                <Text size="lg" className={styles.text}>
                  <strong>Email:</strong> {contactInfo.email}
                </Text>
                <Text size="lg" className={styles.text}>
                  <strong>Address:</strong> {contactInfo.address}
                </Text>
                <Text size="lg" className={styles.text}>
                  <strong>Phone:</strong> {contactInfo.phone}
                </Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>
      </AppShell.Main>
      <AppShell.Section>
        <div className={styles.divider}></div>
        <Footer />
      </AppShell.Section>
    </AppShell>
  );
}
