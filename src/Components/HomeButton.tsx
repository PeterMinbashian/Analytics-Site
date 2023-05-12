import { Button } from "@mantine/core"

function HomeButton(props:any){
    const handleButtonClick = () => {
        props.setMainPage(true)
    }
    return(
        <Button onClick={handleButtonClick}>
            Main Page
        </Button>
    )
}

export default HomeButton