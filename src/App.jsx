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
  return (
    <ChakraProvider>
      <Layout
        navigation={<Navigation />}
        node_repository={<NodeRepository />}
        workflow={<Workflow />}
        right_menu={<RightMenu />}
        console={<Console />}
      />
    </ChakraProvider>
  )
}

export default App
