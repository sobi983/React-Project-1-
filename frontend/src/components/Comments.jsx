import React, { useState } from 'react'
import { Box, Flex, Text, Button, Avatar, VStack } from '@chakra-ui/react'
import { SlOptions } from "react-icons/sl";
import Line from './Line'
import Actions from './Actions';

const Comments = ({ info, likeAction }) => {

    let displayDP = info?.map((items, id) => {
        return (
            <Flex key={id} w={'full'} gap={3} mb={2} mt={2}>
                <Box>
                    <Avatar src={items.url} size={'sm'} />
                </Box>

                <Box alignItems={'start'} w={'full'} className=' space-y-2'>
                    <Flex justifyContent={'space-between'} w={'full'}>
                        <Text className=' font-medium' fontSize={['12px', '14px']}>{items.name}</Text>
                        <Flex gap={2}>
                            <Text color={'gray.light'} fontSize={['12px', '14px']}>{items.days}</Text>
                            <SlOptions className='mt-1' />
                        </Flex>
                    </Flex>
                    <Text fontSize={['14px', '16px']}>{items.comment}</Text>

                    <Actions liked={items.likeStatus} setLiked={() => likeAction(id)} />
                    <Text mt={0} color={'gray.light'} fontSize={['12px', '14px']}>{items.likes} likes</Text>
                    <Line />
                </Box>

            </Flex>
        )
    })
    return (
        <>
            {displayDP}
        </>
    )
}


export default Comments