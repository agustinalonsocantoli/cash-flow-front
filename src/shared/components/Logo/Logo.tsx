import { Flex, Img, Text, useColorMode } from "@chakra-ui/react"
import logoLigth from "../../../assets/Logo_ligth.png"
import logoDark from "../../../assets/Logo_dark.png"

interface Props {
    onlyIcon?: boolean;
}

export const Logo = ({
    onlyIcon = false
}: Props) => {
    const { colorMode } = useColorMode()
    console.log(colorMode)

    return (
        <Flex
            alignItems="center"
            boxSize="fit-content"
            gap="5px"
        >
            <Img
                src={colorMode === "light" ? logoLigth : logoDark}
                alt="logo"
                objectFit="cover"
                boxSize="45px"
            />

            <Text
                display={onlyIcon ? "none" : "block"}
                fontSize={"24px"}
                fontWeight={"700"}
                color="font"
                transition={"all 0.3s"}
                fontFamily={"Nunito Sans"}
            >
                CashFlow
            </Text>
        </Flex>
    )

}