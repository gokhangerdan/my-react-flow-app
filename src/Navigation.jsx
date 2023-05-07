import React from 'react';
import {
  Box,
  Image,
  Text,
  IconButton,
  HStack
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, AttachmentIcon, DownloadIcon, WarningTwoIcon } from "@chakra-ui/icons";

export default function Navigation() {
  return (
    <>
      <Box h="50px" bg="navy" display="flex" alignItems="center" px={4}>
        {/* Logo */}
        <Image src="/vite.svg" alt="Logo" mr={4} />

        {/* Name */}
        <Text fontSize="xl" fontWeight="bold" mr={4} color="gray.100">
          Adflow
        </Text>

        {/* Icon Buttons */}
        <HStack spacing={4}>
          <IconButton
            aria-label="Add"
            icon={<AddIcon />}
            size="sm"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          <IconButton
            aria-label="Minus"
            icon={<MinusIcon />}
            size="sm"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          <IconButton
            aria-label="Attachment"
            icon={<AttachmentIcon />}
            size="sm"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          <IconButton
            aria-label="Download"
            icon={<DownloadIcon />}
            size="sm"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
          <IconButton
            aria-label="Warning"
            icon={<WarningTwoIcon />}
            size="sm"
            variant="ghost"
            colorScheme="whiteAlpha"
          />
        </HStack>
      </Box>
    </>
  );
}