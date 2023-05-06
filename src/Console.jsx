import React, { useState } from 'react';
import {
    Box,
    IconButton
  } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function Navigation() {
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const consoleHeight = isConsoleOpen ? "150px" : "50px";

  return (
    <>
      {/* Console */}
      <Box
        h={consoleHeight}
        bg="gray.200"
        overflow="hidden"
        transition="height 0.3s ease"
      >
        <IconButton
          icon={isConsoleOpen ? (
            <>
            <ChevronDownIcon />
            Console
            </>
            ) : (
            <ChevronUpIcon />
            )
          }
          aria-label="Toggle Console"
          onClick={() => setIsConsoleOpen((isOpen) => !isOpen)}
        />
        {/* Console Content */}
      </Box>
    </>
  );
}