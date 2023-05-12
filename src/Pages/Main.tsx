import { AppShell, Button, Card, Grid, Text, Image, Group, Badge, Paper, Center } from '@mantine/core'
import BubbleCard from '../Components/BubbleCard'
import Header from '../Components/Header'
import { Navigate } from 'react-router-dom'
import { CSSProperties, useState } from 'react';
import HomeButton from '../Components/HomeButton';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';
import VideoPlayer from '../Components/VideoPlayer';


function Main(props:any){
    const [TotalPage, setTotalPage] = useState(false);
    const [MainPage, setMainPage] = useState(false);
    const { ref: inViewRef1, inView: inView1 } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: inViewRef2, inView: inView2 } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const greyEntry:CSSProperties ={
        backgroundColor: "#F6F6F6",
        padding: "10px",
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
        alignItems: 'left'
    };

    const whiteEntry:CSSProperties ={
        backgroundColor: "#FFFFFF",
        padding: "10px",
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
        alignItems: 'left'
    };


    return (
        <>
        <AppShell style={{backgroundColor: '#75AFFF'}}>
            <Header/>
            <Center>
                <Grid gutter={70} style={{marginTop:150}}>
                    <Grid.Col span={4}>
                        <BubbleCard num='38' timeFrame='Hours Saved Per Week'></BubbleCard>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <BubbleCard num='2000' timeFrame='Hours Saved In Total' set={TotalPage} setState={setTotalPage}></BubbleCard>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <BubbleCard num='7.5' timeFrame='Hours Saved Per Day'></BubbleCard>
                    </Grid.Col>
                </Grid>
            </Center>
            <Grid style={{marginTop: 200 }}>
                <Grid.Col span={6} style={{ paddingRight: 50 }}>
                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                    <Card
                        ref={inViewRef1}
                        style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 20,
                        opacity: inView1 ? 1 : 0,
                        transform: inView1 ? 'translateY(0) translateX(0)' : 'translateY(50px) translateX(-100px)',
                        transition: 'opacity 0.5s, transform 0.5s',
                        }}
                    >
                        <div style={{ flex: 1, padding: 30 }}>
                        <Text style={{ fontSize: 36 }}>What is RPA?</Text>
                        </div>
                        <div style={{ borderLeft: '1px solid #ccc', padding: 30, flex: 2 }}>
                        <Text style={{ fontSize: 20 }}>
                            Robotic Process Automation (RPA) is a technology that allows businesses to automate routine tasks by configuring software robots to carry out those tasks.
                        </Text>
                        </div>
                    </Card>
                    </div>
                </Grid.Col>
                <Grid.Col span={6} style={{ paddingLeft: 100, justifyContent: 'flex-end'}}>
                    <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'right',
                    opacity: inView1 ? 1 : 0,
                    transform: inView1 ? 'translateY(0) translateX(0)' : 'translateY(50px) translateX(100px)',
                    transition: 'opacity 0.5s, transform 0.5s'
                    }}>
                    <Card
                        ref={inViewRef1}
                        style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 20,
                        opacity: inView1 ? 1 : 0,
                        transform: inView1 ? 'translateY(0) translateX(0)' : 'translateY(50px) translateX(100px)',
                        transition: 'opacity 0.5s, transform 0.5s',
                        }}
                    >
                        <VideoPlayer url={'https://www.youtube.com/watch?v=4z1A6YretuU'} />
                    </Card>
                    </div>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={7}>
                    <Card
                        ref={inViewRef2}
                        style={{
                            width: "90%",
                            flexDirection: "row",
                            display: "flex",
                            alignItems: "center",
                            opacity: inView2 ? 1 : 0,
                            transform: inView2 ? "translateY(0) translateX(0)" : "translateY(50px) translateX(-100px)",
                            transition: "opacity 0.5s, transform 0.5s",
                            borderRadius: 20,
                            marginTop: 200,
                            justifyContent: 'flex-start'
                        }}
                        >
                        <div style={{ flex: 1}}>
                        <Text style={{ fontSize: 36 }}>Which Portals Already Have Built Automations?</Text>
                        </div>
                        <div style={{ borderLeft: '1px solid #ccc', padding: 30, flex: 2 }}>
                            <ul
                                style={{
                                listStyleType: "none",
                                padding: 0,
                                margin: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "stretch",
                                }}
                            >
                                <li
                                style={greyEntry}
                                >
                                <span style={{ fontWeight: "bold", fontSize:24 }}>CASS</span>
                                </li>
                                <li
                                style={whiteEntry}
                                >
                                <span style={{ fontWeight: "bold", fontSize:24}}>Ryder</span>
                                </li>
                                <li
                                style={greyEntry}
                                >
                                <span style={{ fontWeight: "bold", alignItems:'left', fontSize:24}}>Penske</span>
                                </li>
                                <li
                                style={whiteEntry}
                                >
                                <span style={{ fontWeight: "bold", alignItems:'left', fontSize:24}}>Cargill</span>
                                </li>
                                <li
                                style={greyEntry}
                                >
                                <span style={{ fontWeight: "bold", alignItems:'left', fontSize:24}}>Montreal Gateway</span>
                                </li>
                                <li
                                style={whiteEntry}
                                >
                                <span style={{ fontWeight: "bold", alignItems:'left', fontSize:24 }}>Termont</span>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Grid.Col>
                <Grid.Col span={5} style={{justifyContent: 'flex-end'}}>
                    <Card
                        ref={inViewRef2}
                        style={{
                            width: "100%",
                            flexDirection: "column",
                            display: "flex",
                            alignItems: "center",
                            opacity: inView2 ? 1 : 0,
                            transform: inView2 ? "translateY(0) translateX(0)" : "translateY(50px) translateX(100px)",
                            transition: "opacity 0.5s, transform 0.5s",
                            borderRadius: 20,
                            marginTop: 250,
                            justifyContent: 'flex-end'
                        }}>
                        <Text style={{ fontSize: 36 }}>Is A Portal You Work With On Already Complete? Are You Interested in Getting Help on a Different Portal?</Text>
                        <div style={{ borderTop: '1px solid #ccc', padding: 30, flex: 2 }}>
                        <Text style={{ fontSize: 20 }}>
                            Contact Christian Faranato or Peter Minbashian 
                        </Text>
                        </div>
                    </Card>
                </Grid.Col>
            </Grid>
            {(TotalPage?<Navigate to='/Total' replace={true}/>:null)}
        </AppShell>
        </>
    )
}

export default Main;
