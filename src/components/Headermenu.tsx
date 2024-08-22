import { Menu, Group, Center, Burger, Container, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom'; 
import classes from './HeaderMenu.module.css';
import hidlogo from '../../public/HID logo.png'

const links = [
  {
    link: '#2',
    label: 'Marin Joe',
    links: [
      { link: '/profile', label: 'My Profile' },
      { link: '/login', label: 'Logout' },
    ],
  },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate(); 

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} onClick={() => navigate(item.link)} style={{ height: '44px'}}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
              style={{ color: 'white' }}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown style={{ width: '180px' }}>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => {
          event.preventDefault();
          navigate(link.link); 
        }}
        style={{ color: 'white' }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header} style={{ background: '#00539B' }}>
      <Container size="xxl" style={{ padding: '0px 20px'}}>
        <div className={classes.inner}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px'}}>
            <Image src={hidlogo} alt="HID Logo" height={32} />
            <div className='verDivider' style={{ background: 'rgba(255, 255, 255, 0.56)', height: '30px', width: '1px', }}></div>
            <Text style={{ color: 'rgba(255, 255, 255, 0.56)', fontSize: '20px', fontWeight: '300'}} >Wayfinding</Text>
          </div>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
