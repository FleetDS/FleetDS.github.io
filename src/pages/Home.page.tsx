import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Text } from '@mantine/core';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Text>Hi</Text>
    </>
  );
}
