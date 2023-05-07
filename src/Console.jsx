import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Input,
  Text
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

export default function Console({ logs }) {
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const consoleHeight = isConsoleOpen ? '300px' : '40px';
  const consoleRef = useRef(null);
  const commandsRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [commandValue, setCommandValue] = useState('');

  const handleCommandChange = (event) => {
    setCommandValue(event.target.value);
  };

  const handleCommandSubmit = (event) => {
    event.preventDefault();
    setCommandHistory([...commandHistory, commandValue]);
    setCommandValue('');
  };

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    if (commandsRef.current) {
      commandsRef.current.scrollTop = commandsRef.current.scrollHeight;
    }
  }, [commandHistory]);

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
          icon={
            isConsoleOpen ? (
              <>
                <ChevronDownIcon />
                <Text fontSize='sm' pr={2}>Console</Text>
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
          <Tabs size='sm'>
            <TabList>
              <Tab>Logs</Tab>
              <Tab>Commands</Tab>
            </TabList>

            <TabPanels>
              <TabPanel
                bg="gray.900"
                color="gray.300"
                fontSize="14px"
              >
                <Box
                  height="200px"
                  overflowY="scroll"
                  ref={consoleRef}
                >
                  {logs.map((log, index) => (
                    <div key={index}>{"> " + log}</div>
                  ))}
                </Box>
              </TabPanel>

              <TabPanel
                bg="gray.900"
                color="gray.300"
                fontSize="14px"
              >
                <Box
                  height="150px"
                  overflowY="scroll"
                  ref={commandsRef}
                >
                  <Box id="commands-box">
                    {commandHistory.map((command, index) => (
                      <div key={index}>{"> " + command}</div>
                    ))}
                  </Box>
                </Box>
                <form
                  onSubmit={handleCommandSubmit}
                  style={{ paddingTop: '15px' }}
                >
                  <Input
                    size='sm'
                    value={commandValue}
                    onChange={handleCommandChange}
                  />
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </Box>
    </>
  );
}
