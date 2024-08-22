import { useState } from 'react'
import '../App.css'
import { HeaderMenu } from '../components/Headermenu';
import { NavbarNested } from '../components/NavbarNested/NavbarNested';
import { Button, Card, Group, Input, PasswordInput, Stack, Tabs, Title, Text, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Breadcrumbs, Anchor } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight, IconCirclePlus} from '@tabler/icons-react';


const items = [
  { title: 'Home', href: '#' },
  { title: 'Organization', href: '#' },
  { title: 'Sundial Hospitals', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const Home = () => {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <div className='page' style={{ height: '100%', width: '100%', background: '#F2F2F2',}}>
          <div className='headerDiv' style={{ height: 'auto', width: '100%' }}>
            <HeaderMenu />
          </div>
          <div style={{ display: 'flex', height: '90%', width: '100%', }}>
            <NavbarNested />
            <div style={{ flexGrow: 1 ,padding: '18px 32px' }}>
              <div className='breadcrumbsDiv'>
                <Breadcrumbs separator=">" separatorMargin="sm" mt="xs"
                style={{fontSize: '16px', fontWeight: 500}}
                >
                  {items}
                </Breadcrumbs>
              </div>
              <div className='container' style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div className='baseSection' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                  <Card shadow="sm" radius="md" withBorder style={{maxWidth: '580px'}}>
                    <Group justify="space-between" mt="" mb="xs">
                      <Text size="lg" fw={600}>Norway Fjord Adventures</Text>
                    </Group>
                    <Text size="sm" c="dimmed" style={{ textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </Text>
                    <Group justify="end" mt="" mb="">
                    <Button color="blue" mt="sm" variant='transparent'>
                      Manage Brand Library
                    </Button>
                    </Group>
                  </Card>
                  <Button
                    variant="light"
                    leftSection={<IconCirclePlus size={20} />}
                  >
                    Add New Campus
                  </Button>
                </div>
                <div className='campusViewDiv' style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <Title order={2} style={{ textAlign: 'start'}}>All Campus</Title>
                  <div className='cardConatiner' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px',background: 'white', padding: '40px 28px' }} >
                    {/*---------------- Card 1  ----------------*/}
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                      <Card.Section style={{ padding: '20px'}}>
                        <Image
                          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                          height={160}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group justify="center" mb="xs">
                        <Text size="xl" fw={700} >Campus info & details</Text>
                      </Group>

                      <Text size="md" c="center" style={{ textAlign: 'start'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </Text>

                      <Group justify="space-between" mt="md" mb="xs" style={{flexDirection: 'column', alignItems: 'start', gap: '6px'}}>
                        <Text size="lg" fw={700} >Version Updates</Text>
                        <Text size="lg" fw={400} >Version 2.0 (published)</Text>
                        <Text size="lg" fw={400} >Version 1B (Review by Tara, Jul 24)</Text>
                      </Group>
                    </Card>
                                  
                    {/*---------------- Card 2  ----------------*/}
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                      <Card.Section style={{ padding: '20px'}}>
                        <Image
                          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                          height={160}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group justify="center" mb="xs">
                        <Text size="xl" fw={700} >Campus info & details</Text>
                      </Group>

                      <Text size="md" c="dimmed" style={{ textAlign: 'start'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </Text>

                      <Group justify="space-between" mt="md" mb="xs" style={{flexDirection: 'column', alignItems: 'start', gap: '6px'}}>
                        <Text size="lg" fw={700} >Version Updates</Text>
                        <Text size="lg" fw={400} >Version 2.0 (published)</Text>
                        <Text size="lg" fw={400} >Version 1B (Review by Tara, Jul 24)</Text>
                      </Group>
                    </Card>
                    {/*---------------- Card 2  ----------------*/}
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                      <Card.Section style={{ padding: '20px'}}>
                        <Image
                          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                          height={160}
                          alt="Norway"
                        />
                      </Card.Section>

                      <Group justify="center" mb="xs">
                        <Text size="xl" fw={700} >Campus info & details</Text>
                      </Group>

                      <Text size="md" c="dimmed" style={{ textAlign: 'start'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </Text>

                      <Group justify="space-between" mt="md" mb="xs" style={{flexDirection: 'column', alignItems: 'start', gap: '6px'}}>
                        <Text size="lg" fw={700} >Version Updates</Text>
                        <Text size="lg" fw={400} >Version 2.0 (published)</Text>
                        <Text size="lg" fw={400} >Version 1B (Review by Tara, Jul 24)</Text>
                      </Group>
                    </Card>             
                    
                    
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

export default Home;