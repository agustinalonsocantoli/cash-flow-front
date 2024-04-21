import { Flex, Img, Text } from "@chakra-ui/react"
import greenCircle from "../../../assets/greenCircle.png"
import redCircle from "../../../assets/redCircle.png"
import blueRectagle from "../../../assets/blueRectagle.png"

export const CardBalance = () => {
    return (
        <Flex
            position={"relative"}
            w={"100%"}
            h="200px"
            bg={"primary"}
            rounded={"10px"}
            p="30px"
            direction="column"
            gap="20px"
        >
            <Text
                fontSize={"15px"}
                fontWeight={"500"}
                color={"purewhite"}
            >
                Mi balance
            </Text>

            <Text
                fontSize={"28px"}
                fontWeight={"700"}
                color={"purewhite"}
            >
                € 1.000,00
            </Text>

            <Img
                src={redCircle}
                alt="redCircle"
                boxSize="8px"
                position={"absolute"}
                right={"70px"}
                bottom={"120px"}
            />

            <Img
                src={blueRectagle}
                alt="blueRectagle"
                w={"42px"}
                h="82px"
                zIndex={200}
                opacity={0.5}
                position={"absolute"}
                right={"0"}
                bottom={"30px"}
            />

            <Img
                src={greenCircle}
                alt="greenCircle"
                w={"90px"}
                h={"65px"}
                position={"absolute"}
                right={"0"}
                bottom={"0"}
                rounded={"0 0 10px 0"}
            />
        </Flex>
    )
}