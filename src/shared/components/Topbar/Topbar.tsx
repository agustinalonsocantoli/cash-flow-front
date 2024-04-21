import { Flex } from "@chakra-ui/react"
import { GroupAsyncSelect } from "../CustomElements/GroupAsynSelect"
import { ColorMode } from "../Mode/ColorMode"

export const Topbar = () => {
    return (
        <Flex
            w={"100%"}
            h={"fit-content"}
            p={"20px"}
            justifyContent="space-between"
        >
            <GroupAsyncSelect
                loadOptions={async () => { }}
                onClick={() => { }}
            />


            <ColorMode />
        </Flex>
    )
}