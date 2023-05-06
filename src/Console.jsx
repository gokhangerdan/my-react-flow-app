import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    IconButton
  } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function Console({ logs }) {
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const consoleHeight = isConsoleOpen ? "200px" : "50px";
  const consoleRef = useRef(null);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

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
        {isConsoleOpen && (
          <Box
            bg="black"
            color="white"
            p={2}
            overflowY="auto"
            height={isConsoleOpen ? "calc(100% - 40px)" : "0"}
            ref={consoleRef}
          >
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}