import { useState } from 'react'
import {
  ChakraProvider
} from '@chakra-ui/react'
import FlowEditor from './FlowEditor'
import Workflow from './Workflow'

function App() {
  return (
    <ChakraProvider>
      <FlowEditor>
        <Workflow />
      </FlowEditor>
    </ChakraProvider>
  )
}

export default App
