import { As, Flex, Icon } from "@chakra-ui/react"
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Logo } from "../Logo/Logo";
import { NavLink } from "./Navlink";
import { RxDashboard } from "react-icons/rx";
import { LuActivitySquare } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5";
import { Actions } from "./Actions";
import { useLocation } from "react-router-dom";


export const Sidebar = () => {
    const location = useLocation();
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

    const activePath = (text: string): boolean => {
        if (text === "/") {
            if (location.pathname === "/")
                return true
            return false
        } else {
            if (location.pathname.includes(text)) { return true }
            else { return false }
        }
    };

    const links: NavLinkTypes[] = [
        {
            path: "/",
            icon: RxDashboard,
            label: "Dashboard",
            active: activePath("/"),
            showLabel: openSidebar,
        },
        {
            path: "/activity",
            icon: LuActivitySquare,
            label: "Mi actividad",
            active: activePath("/activity"),
            showLabel: openSidebar,
        },
        {
            path: "/accounts",
            icon: IoCardOutline,
            label: "Mis cuentas",
            active: activePath("/accounts"),
            showLabel: openSidebar,
        },
    ]

    return (
        <Flex
            h={"100vh"}
            alignItems={"center"}
            pl={"30px"}
            w="115px"
        >
            <Flex
                zIndex={9999}
                position={"absolute"}
                bg={"background"}
                w={openSidebar ? "200px" : "85px"}
                transition={"all 0.3s"}
                h={"97%"}
                rounded={"25px"}
                boxShadow={"0px 8px 30px 10px rgba(0, 0, 9, 0.05)"}
                py="25px"
                direction="column"
                gap="100px"
            >
                <Flex
                    bg={"purewhite"}
                    rounded={"100%"}
                    boxSize={"fit-content"}
                    p={"3px"}
                    position={"absolute"}
                    top={"120px"}
                    right={"-12px"}
                    cursor={"pointer"}
                    _active={{ transform: "scale(0.9)" }}
                    onClick={() => setOpenSidebar((prev: boolean) => !prev)}
                >
                    <Icon as={MdOutlineKeyboardArrowRight} boxSize={"20px"} color="main" />
                </Flex>

                <Flex
                    w="100%"
                    pl="20px"
                >
                    <Logo
                        onlyIcon={!openSidebar}
                    />
                </Flex>

                <Flex
                    direction="column"
                    gap="25px"
                >
                    {links.map((link: NavLinkTypes, index: number) => (
                        <NavLink
                            key={index}
                            path={link?.path}
                            icon={link?.icon}
                            label={link?.label}
                            active={link?.active}
                            showLabel={link?.showLabel}
                        />
                    ))}
                </Flex>

                <Flex
                    pl={"30px"}
                    mt="auto"
                >
                    <Actions 
                        openSidebar={openSidebar}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}

interface NavLinkTypes {
    path: string;
    icon: As;
    label: string;
    active?: boolean;
    showLabel?: boolean;
}