import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import 'reset-css'
import Layout from '../components/Layout'

const theme = extendTheme({
  colors: {
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          '&:focus': {
            boxShadow: 'none',
            outline: 'none',
          },
        },
      },
    },
  },
})

const MyApp = ({ Component, pageProps }) => {
  return Component.authPage ? (
    <Component {...pageProps} />
  ) : (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
