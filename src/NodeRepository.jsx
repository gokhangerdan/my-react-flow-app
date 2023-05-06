import React, { useState } from 'react';
import {
  Box,
  IconButton,
  VStack,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function NodeRepository() {
  const [isNodeRepositoryOpen, setIsNodeRepositoryOpen] = useState(true);
  const nodeRepositoryWidth = isNodeRepositoryOpen ? "300px" : "50px";

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <>
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
          {isNodeRepositoryOpen && (
          <VStack spacing={4} p={4}>
            <Text
              as="div"
              draggable
              onDragStart={(event) => onDragStart(event, 'nodeType1')}
              bg="blue.500"
              color="white"
              p={2}
              borderRadius="md"
              cursor="grab"
            >
              Node Type 1
            </Text>
            <Text
              as="div"
              draggable
              onDragStart={(event) => onDragStart(event, 'nodeType2')}
              bg="green.500"
              color="white"
              p={2}
              borderRadius="md"
              cursor="grab"
            >
              Node Type 2
            </Text>
          </VStack>
        )}
        </Box>
    </>
  );
}