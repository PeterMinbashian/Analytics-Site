import { Card, Text } from '@mantine/core';

function Header() {
  return (
    // <Card radius="xl" shadow="md">
    <Text 
    style={{ 
      fontSize: '60px', 
      fontWeight: 'bold', 
      color: 'black', 
      fontFamily: 'Arial, sans-serif', 
      borderRadius: '50px', 
      padding: '20px', 
      backgroundColor: '#FFFFFF' 
    }}>
      The Power of RPA in the Workplace
  </Text>
    // </Card>
  );
}

export default Header;
