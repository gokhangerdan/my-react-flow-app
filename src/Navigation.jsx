import React from 'react';
import {
  Box,
  Image,
  Text,
  Button
} from "@chakra-ui/react";

export default function Navigation() {
  return (
    <>
      <Box h="60px" bg="blue.500" display="flex" alignItems="center" px={4}>
        {/* Logo */}
        <Image src="/vite.svg" alt="Logo" mr={4} />

        {/* Name */}
        <Text fontSize="xl" fontWeight="bold" mr={4}>
          Adflow
        </Text>

        {/* Buttons */}
        <Button mr={4}>Button 1</Button>
        <Button>Button 2</Button>
      </Box>
    </>
  );
}