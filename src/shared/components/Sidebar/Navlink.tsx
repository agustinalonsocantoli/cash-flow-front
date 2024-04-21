import { Link as LinkRouter } from 'react-router-dom'
import { Link, Icon, Text, Flex, As, Box } from "@chakra-ui/react";
import { useEffect, useState } from 'react';

interface Props {
    path: string;
    icon: As;
    label: string;
    active?: boolean;
    showLabel?: boolean;
}

export const NavLink = ({ path, icon, label, active = false, showLabel = false }: Props) => {
    const [delayShowLabel, setDelayShowLabel] = useState<boolean>();

    useEffect(() => {
        if(!showLabel) return setDelayShowLabel(showLabel);
        
        const timeout = setTimeout(() => { setDelayShowLabel(showLabel) }, 100);

        return () => clearTimeout(timeout);
    }, [showLabel]);

    return (
        <Link
            as={LinkRouter}
            to={path}
            display="flex"
            gap="25px"
            _hover={{ textDecoration: "none" }}
            h={"25px"}
        >
            <Box
                opacity={active ? 1 : 0}
                w="4px"
                bg="ative"
                rounded={"0 5px 5px 0"}
            />

            <Flex
                alignItems="center"
                gap="10px"
                color={"font"}
                _hover={{ color: "main" }}
            >
                <Icon
                    as={icon}
                    boxSize="25px"
                    transition={"all 0.3s"}
                />

                <Text
                    display={delayShowLabel ? "block" : "none"}
                    transition={"all 0.3s"}
                    fontSize="16px"
                    fontWeight="500"
                >
                    {label}
                </Text>
            </Flex>
        </Link>
    );
};
