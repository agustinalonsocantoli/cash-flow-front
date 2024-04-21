import { Flex } from "@chakra-ui/react"
import { CardBalance } from "../components/CardBalance"

export const General = () => {
    return (
        <Flex>
            <Flex
                w={"70%"}
            >

            </Flex>

            <Flex
                w={"30%"}
            >
                <CardBalance />
            </Flex>
        </Flex>
    )
}