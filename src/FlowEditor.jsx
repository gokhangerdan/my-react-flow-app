import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const FlowEditor = (props) => {
  const [isNodeRepositoryOpen, setIsNodeRepositoryOpen] = useState(true);
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(true);

  const nodeRepositoryWidth = isNodeRepositoryOpen ? "300px" : "50px";
  const consoleHeight = isConsoleOpen ? "150px" : "50px";
  const rightMenuWidth = isRightMenuOpen ? "300px" : "50px";

  const flowBgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <Box h="100vh" display="flex" flexDir="column">
      <Box h="60px" bg="blue.500">
        {/* Top Navigation Bar */}
      </Box>

      <Flex flex="1" overflow="hidden">
        {/* Node Repository */}
        <Box
          w={nodeRepositoryWidth}
          bg="gray.200"
          overflow="hidden"
          transition="width 0.3s ease"
        >
          <IconButton
            icon={
              isNodeRepositoryOpen ? (
                <>
                <ChevronLeftIcon />
                Node Repository
                </>
              ) : (
                <ChevronRightIcon />
              )
            }
            aria-label="Toggle Node Repository"
            onClick={() =>
              setIsNodeRepositoryOpen((isOpen) => !isOpen)
            }
          />
          {/* Node Repository Content */}
        </Box>

        {/* Workflow Window */}
        <Box flex="1" bg={flowBgColor} overflow="auto">
          {/* Workflow Window Content */}
          {props.children}
        </Box>

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
              Properties
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
      </Flex>

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
    </Box>
  );
};

export default FlowEditor;