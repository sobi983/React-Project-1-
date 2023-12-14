import { VStack, Box, Text, Flex, Avatar, Menu, MenuButton, Portal, MenuList, MenuItem, useToast } from '@chakra-ui/react'
import { FaInstagram } from "react-icons/fa"
import { CgMoreO } from "react-icons/cg";
import dp from '/public/zuck-avatar.png'
import { Link, useHref } from 'react-router-dom';
import { useRef } from 'react';
//This is the header of the profile page where username, name, foloowers, Profile image and 2 tabs including Threads and replies will be shown

const UserHeader = () => {
    let location = useHref()
    let toastPopUp = useToast()
    const toastIdRef = useRef()


    let handleCopy = () => {
        let url = `http://localhost:5173${location}`
        navigator.clipboard.writeText(url)
        toastIdRef.current = toastPopUp({ description: 'Profile Link Copied!' })
    }
    return (
        <>
            <VStack alignItems={'start'}>

                <Flex justifyContent={'space-between'} w={'full'}>
                    <Box>
                        <Text className='font-bold' fontSize={["26px", "30px", "32px"]}>Mark Zukerberg</Text>
                        <Flex className='items-center gap-2'>
                            <Text className=' text-md'>m_zukerberg</Text>
                            <Text className='text-sm rounded-full p-1 mt-1' color={'gray.light'} bg={'gray.dark'}>threads.net</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Avatar name="Mark Zukerburg" src={dp} size={["lg", "xl", "lg", "xl"]} />
                    </Box>
                </Flex>

                <Text letterSpacing={0.5} fontSize={['14px', '16px']}>Co-founder, executive chairman and CEO of Meta Platform.</Text>

                <Flex className=' justify-between w-full  mt-2'>
                    <Link to='https://instagram.com'>
                        <Text color={'gray.light'} className='hover:underline'>3.2M followers • instagram.com</Text>
                    </Link>

                    <Flex gap={2}>
                        <FaInstagram size={26} className='hover:bg-dark rounded-full cursor-pointer' />
                        <Menu>
                            <MenuButton className='hover:bg-dark rounded-full' >
                                <CgMoreO size={25} className='cursor-pointer' />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={'gray.dark'}>
                                    <MenuItem bg={'gray.dark'} onClick={handleCopy}>Copy link</MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Flex>

                </Flex>

                <Flex w={'full'}>
                    <Flex flex={1} borderBottom={'1.5px solid white'} className='pb-2 justify-center cursor-pointer'>
                        <Text className=' font-bold border-b-white'>Threads</Text>
                    </Flex>

                    <Flex flex={1} borderBottom={'1px solid gray'} className='pb-2 justify-center cursor-pointer'>
                        <Text className=' font-bold'>Replies</Text>
                    </Flex>
                </Flex>
            </VStack>
        </>
    )
}

export default UserHeader