import '../App.css'
import { HeaderMenu } from '../components/Headermenu';
import { Avatar, Button, Card, Grid, Indicator, Input, PasswordInput, Stack, Tabs, Title, Text } from '@mantine/core';

const Profile = () => {

  return (
    <>
    <div className='page' style={{ height: 'auto', width: '100%', background: '#F2F2F2'}}>
        <div className='headerDiv' style={{ height: '100%', width: '100%' }}>
            <HeaderMenu />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', gap: '24px', paddingTop: '32px', paddingLeft: '32px', paddingRight: '32px',  }}>
            <div className='titleDiv' style={{display: 'flex',alignItems: 'start', marginBottom: '12px' }}>
            <Title order={1}>My Profile</Title>
            </div>
            <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
            <div className='tabsDiv' style={{ marginBottom: '12px',}}>
            <Tabs defaultValue="first">
                <Tabs.List
                >
                <Tabs.Tab value="first">General</Tabs.Tab>
                <Tabs.Tab value="second">Security</Tabs.Tab>
                </Tabs.List>
            </Tabs>
            </div>
            <div className='contentGrid' style={{ marginTop: '24px', background: 'red', height: '100px'}}>
                <div className='upperSection' style={{ background: 'white', padding: '32px', display: 'flex', justifyContent:'space-between' }}>
                    <div className='leftSection' style={{ display: 'flex', alignItems: 'center', gap: '32px'}}>
                        <Indicator inline size={16} offset={7} position="bottom-start" color="red" withBorder>
                            <Avatar
                                size="xl"
                                radius="xl"
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
                            />
                        </Indicator>
                        <Text
                        fw={500}
                        style={{color: 'black', fontSize: '24px'}}
                        >
                        Marin Joe
                        </Text>
                    </div>
                    <div className='RightSection' style={{ display: 'flex', gap: '12px' }}>
                        <Card shadow="sm" style={{ width: '180px', height: '150px', alignItems: 'start', paddingLeft: '24px', gap: '12px'}} >
                            <div style={{ display: 'flex', flexDirection: 'column', height: '84%', justifyContent: 'space-between', alignItems: 'start'}}>
                                <Text size="lg">Clients</Text>
                                <Card shadow="none" style={{ alignItems: 'start', padding: '0px'}} >
                                    <Title order={1} style={{ fontSize: '42px', color: '#0057B7'}}>22</Title>
                                </Card>
                            </div>
                        </Card>
                        <Card shadow="sm" style={{ width: '180px', height: '150px', alignItems: 'start', paddingLeft: '24px', gap: '12px',}} >
                            <div style={{ display: 'flex', flexDirection: 'column', height: '75%', justifyContent: 'space-between', alignItems: 'start'}}>
                                <Text size="lg">Role</Text>
                                <Card shadow="none" style={{ alignItems: 'start', padding: '0px'}} >
                                    <Title order={1} style={{ fontSize: '26px', color: '#0057B7'}}>Super User</Title>
                                </Card>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className='seperator' style={{ width: '100%', height: '1px', paddingLeft: '20px', paddingRight: '20px', background: 'white'}}>
                    <div style={{ background: '#DDDDDD', height: '100%'}}></div>
                </div>
                <div className='lowerSection' style={{ background: 'white', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className='header' style={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <Title order={2} style={{color: 'black'}}>Profile Details</Title>
                        <Text size="sm" style={{color: '#666666'}}>Your permissions only allow updating your phone number</Text>
                    </div>
                    <div className='cardContainer' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px'}}>
                        <div className="card" style={{ display: 'flex', alignItems: 'center', padding: '24px 24px', borderRadius: '4px', backgroundColor: 'white', maxWidth: '320px', gap: '16px'}}>
                            <div className="icon">
                                <div className='image' style={{ borderRadius: '100px', background: '#EAEAEA', height: '44px', width: '44px'}}></div>
                            </div>
                            <div className="info" style={{display: 'flex', flexDirection: 'column', gap: '1px', alignItems: 'start',}}>
                                <p className="title" style={{ padding: '0px', margin: '0px', color: '#555555', fontSize: '15px'}}>E-mail</p>
                                <p className="number" style={{ padding: '0px', margin: '0px', fontWeight: 500, fontSize: '18px'}}>marin.joe@hidglobal.com</p>
                            </div>
                        </div>
                        <div className="card" style={{ display: 'flex', alignItems: 'center', padding: '24px 24px', borderRadius: '4px', backgroundColor: 'white', maxWidth: '320px', gap: '16px'}}>
                            <div className="icon">
                                <div className='image' style={{ borderRadius: '100px', background: '#EAEAEA', height: '44px', width: '44px'}}></div>
                            </div>
                            <div className="info" style={{display: 'flex', flexDirection: 'column', gap: '1px', alignItems: 'start',}}>
                                <p className="title" style={{ padding: '0px', margin: '0px', color: '#555555', fontSize: '15px'}}>Organization Role</p>
                                <p className="number" style={{ padding: '0px', margin: '0px', fontWeight: 500, fontSize: '18px'}}>Super Admin - HID</p>
                            </div>
                        </div>
                        <div className="card" style={{ display: 'flex', alignItems: 'center', padding: '24px 24px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', maxWidth: '320px', gap: '16px'}}>
                            <div className="icon">
                                <div className='image' style={{ borderRadius: '100px', background: '#EAEAEA', height: '44px', width: '44px'}}></div>
                            </div>
                            <div className="info" style={{display: 'flex', flexDirection: 'column', gap: '1px', alignItems: 'start',}}>
                                <p className="title" style={{ padding: '0px', margin: '0px', color: '#555555', fontSize: '15px'}}>Phone Number</p>
                                <p className="number" style={{ padding: '0px', margin: '0px', fontWeight: 500, fontSize: '18px'}}>+17043030543053</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='footer' style={{ background: '#0057B7', height: '42px', display: 'flex', alignItems: 'end'}}>
            <div className='content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'flex-start', gap: '16px', paddingLeft: '24px' }}>
            <p style={{ fontSize: '12px', fontWeight: 400, color: 'white', }}>2023 HID Global Corporation/ASSA ABLOY. All rights reserved</p>
            <p style={{ fontSize: '14px', fontWeight: 400, color: 'white', }}>|</p>
            <p style={{ fontSize: '12px', fontWeight: 400, color: 'white', textDecoration: 'underline' }}>Privacy Statement</p>
            <p style={{ fontSize: '14px', fontWeight: 400, color: 'white', }}>|</p>
            <p style={{ fontSize: '12px', fontWeight: 400, color: 'white', textDecoration: 'underline' }}>Terms of Use</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile;