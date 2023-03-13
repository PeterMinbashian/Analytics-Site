import { Text, createStyles } from "@mantine/core"


function Header(){
    return(
        <Text component="h1" fz={48} fw={700} color='Black' sx = {{fontFamily: "Helvetica"}}>
            RPA Time Saved
        </Text>
    )

}

export default Header