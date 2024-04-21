import { As, Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { AiOutlinePoweroff } from "react-icons/ai"
import { LuSettings } from "react-icons/lu"
import { MdOutlineAccountCircle } from "react-icons/md"

interface Props {
    openSidebar?: boolean;
}

export const Actions = ({
    openSidebar = false
}: Props) => {
    const [openOptions, setOpenOptions] = useState<boolean>(false)
    const optionsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {

                setOpenOptions(false);
            }
        };

        document.addEventListener('click', handleClickOutside);


        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const actions: Actions[] = [
        {
            icon: AiOutlinePoweroff,
            label: "Cerrar sesión",
            onClick: () => { }
        },
        {
            icon: MdOutlineAccountCircle,
            label: "Mi perfil",
            onClick: () => { }
        }
    ]

    return (
        <Flex
            position={"relative"}
            ref={optionsRef}
            cursor={"pointer"}
            onClick={() => setOpenOptions((prev: boolean) => !prev)}
        >
            <Icon
                _hover={{ color: "main" }}
                as={LuSettings}
                boxSize="25px"
                color={"font"}
                _active={{ transform: "scale(0.9)" }}
            />

            <Flex
                pos="absolute"
                bg="background"
                w={"250px"}
                p={"15px 20px"}
                bottom="-25px"
                left={openSidebar ? "175px" : "58px"}
                rounded="14px"
                boxShadow="rgba(0, 0, 0, 0.25) 0px 4px 29px 0px"
                zIndex="dropdown"
                opacity={openOptions ? "1" : "0"}
                visibility={openOptions ? "visible" : "hidden"}
                transform={openOptions ? "none" : "scale(0.8) translateZ(0px)"}
                direction="column"
                justifyContent="center"
            >
                <Flex
                    alignItems="center"
                    gap="10px"
                >
                    <Avatar 
                        size="sm"
                        name="Agustin Alonso Cantoli"
                        bg={"main"}
                    />

                    <Text
                        color={"font"}
                        fontSize="16px"
                        fontWeight="600"
                    >
                        Agustin Alonso Cantoli
                    </Text>
                </Flex>

                <Box h="1px" w="100%" bg="border" my="20px" />

                <Flex
                    direction="column"
                    gap="10px"
                >
                {actions.map((action: Actions, index: number) => (
                    <Flex
                        key={index}
                        alignItems="center"
                        gap="10px"
                        cursor="pointer"
                        _hover={{ color: "main" }}
                        onClick={action?.onClick}
                    >
                        <Icon as={action?.icon} boxSize="20px" />

                        <Text fontWeight="normal" fontSize="16px">
                            {action?.label}
                        </Text>
                    </Flex>
                ))}
                </Flex>
            </Flex>
        </Flex>
    )
}

interface Actions {
    icon: As;
    label: string;
    onClick: () => void;
}