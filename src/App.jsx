import React, { useState, useEffect } from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react'
import Layout from './Layout'
import Workflow from './Workflow'
import Navigation from './Navigation'
import NodeRepository from './NodeRepository'
import RightMenu from './RightMenu'
import Console from './Console'

function App() {
  const [logs, setLogs] = useState([]);

  const log = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  return (
    <ChakraProvider>
      <Layout
        navigation={<Navigation />}
        node_repository={<NodeRepository />}
        workflow={<Workflow log={log} setLogs={setLogs} />}
        right_menu={<RightMenu />}
        console={<Console logs={logs} />}
      />
    </ChakraProvider>
  )
}

export default App
