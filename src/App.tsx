import { Box, Flex } from "@chakra-ui/react"
import { Sidebar } from "./shared/components/Sidebar/Sidebar"
import { BrowserRouter } from "react-router-dom"
import { Topbar } from "./shared/components/Topbar/Topbar"
import { RouterController } from "./shared/components/Router/RouterContoller"

function App() {
  const user = { auth: true }

  return (
    <BrowserRouter basename="/">
      <Flex
        gap="20px"
      >
        {user.auth && <Sidebar />}

        <Box flex="1">
          {user.auth && <Topbar />}

          <Box
            px="20px"
            overflow="auto"
            maxH={user?.auth ? "calc(100vh - 82px)" : "100vh"}
            css={{
              '&::-webkit-scrollbar': {
                width: '5px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: "light_grey",
                borderRadius: '20px',
              },
            }}
          >
            <RouterController />
          </Box>
        </Box>
      </Flex>
    </BrowserRouter>
  )
}

export default App
