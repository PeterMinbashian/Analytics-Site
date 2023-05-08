import { Text, createStyles } from "@mantine/core"

function Header(){
    return(
        <Text component="h1" fz={40} fw={700} color='Black' sx = {{fontFamily: "Copperplate"}}>
            RPA Time Saved
        </Text>
    )

}

export default Header