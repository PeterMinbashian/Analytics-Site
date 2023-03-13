import { AppShell, Button, Card, Grid, Text, Image, Group, Badge, Paper, Center } from '@mantine/core'
import BubbleCard from '../Components/BubbleCard'
import Header from '../Components/Header'

function Main(props:any){
    return (
        <AppShell style={{background: 'rgba(2, 192, 240)'}}>
            <Header/>
        <Center>
            <Grid gutter={70}>
                <Grid.Col span={4}>
                    <BubbleCard num='38' timeFrame='Hours Saved Per Week'></BubbleCard>
                </Grid.Col>
                <Grid.Col span={4} style={{marginTop:'15%'}}>
                    <BubbleCard num='2000' timeFrame='Hours Saved In Total'></BubbleCard>
                </Grid.Col>
                <Grid.Col span={4}>
                    <BubbleCard num='7.5' timeFrame='Hours Saved Per Day'></BubbleCard>
                </Grid.Col>
            </Grid>
        </Center>

        </AppShell>
    )
}

export default Main