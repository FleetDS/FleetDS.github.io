import React from 'react';
import { Button, TextInput, Textarea, Paper, Title, Fieldset, Grid } from '@mantine/core';
import { useForm } from '@mantine/form';

// Comprehensive email regex pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Improved phone regex pattern (allows spaces, dashes, and parentheses)
const phoneRegex = /^(\+?\d{1,4}[\s-])?(\(?\d{1,5}\)?[\s-])?\d{1,4}([\s-]\d{1,4}){1,2}$/;

export function ContactForm() {
  // Initialize form state and validation
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    },
    validate: {
      email: (value: string) => (emailRegex.test(value) ? null : 'Invalid email address'),
      phone: (value: string) => (phoneRegex.test(value) ? null : 'Invalid phone number'),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fe1ad07b-ce4a-4162-b25f-7575d7e9ace5',
          ...values,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        form.reset(); // Reset form after successful submission
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <Paper shadow="xs" radius="md">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Fieldset legend="Contact Information">
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="First Name"
                {...form.getInputProps('firstName')}
                required
                size="md"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Last Name"
                {...form.getInputProps('lastName')}
                required
                size="md"
              />
            </Grid.Col>
          </Grid>
          <TextInput
            label="Company"
            {...form.getInputProps('company')}
            required
            size="md"
          />
          <TextInput
            label="Phone Number"
            {...form.getInputProps('phone')}
            required
            size="md"
          />
          <TextInput
            label="Email"
            {...form.getInputProps('email')}
            required
            error={form.errors.email}
            size="md"
          />
          <Textarea
            label="Message"
            placeholder="Your message"
            {...form.getInputProps('message')}
            required
            autosize
            minRows={6}
            size="md"
          />
          <Button type="submit" fullWidth mt="md">
            Send Message
          </Button>
        </Fieldset>
      </form>
    </Paper>
  );
}
