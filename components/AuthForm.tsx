import { Box, Flex } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { auth } from '../lib/mutation'

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await auth(mode, { email, password })

    setIsLoading(false)

    // router.push('/')
  }

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="1px solid white"
      >
        Spotify
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray" borderRadius="6px">
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            onSubmit={handleSubmit}
          >
            <Input
              placeholder="Email"
              type="email"
              padding="10px"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              padding="10px"
            />
            <Button
              type="submit"
              bg="green"
              isLoading={isLoading}
              padding="10px"
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm
