import React, { useState } from 'react';
import { Card, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';

function BubbleCard(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // const navigate = useNavigate();

  const handleCardClick = () => {
    props.setState(!props.state)
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const cardStyle: CSSProperties = {
    width: isExpanded ? '100vw' : 350,
    height: isExpanded ? '100vh' : 350,
    // background: 'rgba(179, 247, 255)',
    // backgroundColor: '#E0FFFF',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: isExpanded ? 0 : 50,
    borderBottomLeftRadius: isExpanded ? 0 : 20,
    borderBottomRightRadius: isExpanded ? 0 : 20,
    borderTopLeftRadius: isExpanded ? 0 : 20,
    borderTopRightRadius: isExpanded ? 0 : 20,
    transition: 'width 1s ease-in-out, height 1s ease-in-out, border-radius 1s ease-in-out, transform-origin 1s ease-in-out',
    transform: isExpanded ? 'scale(1.1)' : (isHovered ? 'scale(1.1)' : 'scale(1)'),
    position: isExpanded ? 'fixed' : 'static',
    zIndex: isExpanded ? 1 : 0,
    top: isExpanded ? 0 : 'auto',
    left: isExpanded ? 0 : 'auto',
    boxShadow: isExpanded ? 'none' : '0 2px 6px rgba(0, 0, 0, 0.2)',
    transformOrigin: isExpanded ? 'center, center' : '50% 50%',
  };

  return (
    <Card
      style={cardStyle}
      shadow="sm"
      padding="lg"
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isExpanded ?
        null :
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
      }
    </Card>
  );
}

export default BubbleCard;
