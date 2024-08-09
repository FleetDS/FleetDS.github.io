import React from 'react';
import { Anchor } from '@mantine/core';
import styles from './ContactButton.module.css'; // Import your custom styles

const ContactButton: React.FC = () => {
  return (
    <Anchor 
      href="#/contact#top" 
      className={styles.contactButton}
    >
      Contact Us
    </Anchor>
  );
};

export default ContactButton;
