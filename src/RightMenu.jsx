import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Text
  } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function RightMenu() {
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(true);
  const rightMenuWidth = isRightMenuOpen ? "300px" : "40px";

  return (
    <>
      {/* Right Menu */}
      <Box
        w={rightMenuWidth}
        bg="gray.200"
        overflow="hidden"
        transition="width 0.3s ease"
      >
        <IconButton
          icon={
            isRightMenuOpen ? (
            <>
            <ChevronRightIcon />
            <Text fontSize='sm' pr={2}>Node Properties</Text>
            </>
            ) : (
            <ChevronLeftIcon />
            )
          }
          aria-label="Toggle Right Menu"
          onClick={() => setIsRightMenuOpen((isOpen) => !isOpen)}
          ml="auto"
        />
        {/* Right Menu Content */}
      </Box>
    </>
  );
}