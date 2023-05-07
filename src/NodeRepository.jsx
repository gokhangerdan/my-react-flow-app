import React, { useState } from 'react';
import {
  Box,
  IconButton,
  VStack,
  Text
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function NodeRepository() {
  const [isNodeRepositoryOpen, setIsNodeRepositoryOpen] = useState(true);
  const nodeRepositoryWidth = isNodeRepositoryOpen ? "300px" : "40px";

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
                <Text fontSize='sm' pr={2}>Node Repository</Text>
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
          <VStack spacing={2} p={4}>
            <Text
              as="div"
              draggable
              onDragStart={(event) => onDragStart(event, 'nodeType1')}
              bg="gray.800"
              color="gray.100"
              p={2}
              borderRadius="md"
              cursor="grab"
              w="100%"
              fontSize="sm"
              textAlign="center"
            >
              Node Type 1
            </Text>
            <Text
              as="div"
              draggable
              onDragStart={(event) => onDragStart(event, 'nodeType2')}
              bg="gray.800"
              color="gray.100"
              p={2}
              borderRadius="md"
              cursor="grab"
              w="100%"
              fontSize="sm"
              textAlign="center"
            >
              Node Type 2
            </Text>
          </VStack>
        )}
        </Box>
    </>
  );
}