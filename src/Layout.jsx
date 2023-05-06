import {
  Box,
  Flex,
  useColorModeValue
} from "@chakra-ui/react";

const Layout = (props) => {
  const flowBgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <Box h="100vh" display="flex" flexDir="column">
      {props.navigation}
      <Flex flex="1" overflow="hidden">
        {props.node_repository}
        {/* Workflow Window */}
        <Box flex="1" bg={flowBgColor} overflow="auto">
          {/* Workflow Window Content */}
          {props.workflow}
        </Box>
        {props.right_menu}
      </Flex>
      {props.console}
    </Box>
  );
};

export default Layout;