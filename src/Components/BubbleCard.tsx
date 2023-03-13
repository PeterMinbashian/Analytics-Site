import React, { useState } from 'react';
import { Card, Text } from '@mantine/core';

function BubbleCard(props:any) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{ 
        width: 300, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: 300,
        top: 0,
        borderRadius: "50%",
        transition: 'transform 0.2s ease-in-out',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      }}
      shadow="sm" 
      padding="lg" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Section 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center" 
        }}
      >
        <Text fz={80} fw={700}>
          {props.num}
        </Text>
        <Text fz='lg'>
          {props.timeFrame}
        </Text>
      </Card.Section>
    </Card>
  );
}

export default BubbleCard;