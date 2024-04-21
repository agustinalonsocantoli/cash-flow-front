import { Flex, Icon, useColorMode } from "@chakra-ui/react"
import { useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs"

interface Props {
    isColumn?: boolean;
}

export const ColorMode = ({
    isColumn = false
}: Props) => {
    const { toggleColorMode } = useColorMode();
    const [traslate, setTranslate] = useState<boolean>(false);

    return (
        <Flex
            bg="main"
            p="5px 7px"
            rounded="50px"
            color={"font"}
            gap="5px"
            w={isColumn ? "fit-content" : "81px"}
            h={isColumn ? "81px" : "fit-content"}
            cursor={"pointer"}
            direction={ isColumn ? "column" : "row"}
            onClick={() => {
                setTranslate((prev: boolean) => !prev)

                setTimeout(() => {
                    toggleColorMode()
                }, 200)
            }}
        >
            <Flex
                rounded="100%"
                alignItems="center"
                justifyContent={"center"}
                p="7px"
                pos={"absolute"}
                opacity={traslate ? 1 : 0}
            >
                <Icon as={BsSun} boxSize="17px" />
            </Flex>

            <Flex
                bg="background"
                rounded="100%"
                alignItems="center"
                justifyContent={"center"}
                p="7px"
                transform={
                    !traslate 
                    ? isColumn ? "translateY(0px)"  : "translateX(0px)" 
                    : isColumn ? "translateY(35px)" : "translateX(35px)"
                }
                transition={"all 0.3s"}
            >
                <Icon 
                    as={!traslate ? BsSun : BsMoonStars} 
                    boxSize="17px" 
                />
            </Flex>

            <Flex
                opacity={!traslate ? 1 : 0}
                rounded="100%"
                alignItems="center"
                justifyContent={"center"}
                p="7px"
            >
                <Icon as={BsMoonStars} boxSize="17px" />
            </Flex>
        </Flex>
    )
}