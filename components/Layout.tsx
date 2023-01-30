import { Box } from '@chakra-ui/layout'

const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        width="250px"
        position="absolute"
        top="0"
        left="0"
        height="calc(100vh - 100px)"
        border="1px solid black"
      >
        SideBar
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="100px"
        border="1px solid black"
      >
        Footer
      </Box>
    </Box>
  )
}

export default Layout
