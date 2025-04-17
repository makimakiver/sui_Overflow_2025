import { Flex } from '@radix-ui/themes'
import HomeBody from './components/HomeBody'
function App() {
  return (
    <div style={{ marginTop: "60px", display: "flex", flexDirection: "column", alignItems: "flex-end", paddingRight: "5%" }}> 
      <Flex gap="3" style={{ width: "80vw"}}>
        <HomeBody />
        <HomeBody />
        <HomeBody />
        <HomeBody />
      </Flex>
      <Flex gap="3" style={{ width: "80vw"}}>
        <HomeBody />
        <HomeBody />
        <HomeBody />
        <HomeBody />
      </Flex>
    </div>
  )
}

export default App
