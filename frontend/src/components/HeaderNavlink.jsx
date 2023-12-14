import { Flex, Image, useColorMode } from '@chakra-ui/react'
import lightLogo from '/light-logo.svg'
import darkLogo from '/dark-logo.svg'

const Header = () => {
  let { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex className='justify-center mt-10 mb-12'>
      <Image
        cursor={'pointer'}
        alt='logo'
        src={colorMode === 'dark' ? lightLogo : darkLogo}
        onClick={toggleColorMode}
        className='w-10'
      />
    </Flex>
  )
}

export default Header