import { ScrollArea, } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
} from '@tabler/icons-react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import classes from './NavbarNested.module.css';

const mockdata = [
  { label: 'Home', icon: IconGauge },
  {
    label: 'Global Settings',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Design Elements', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Organization',
    icon: IconCalendarStats,
    links: [
      { label: 'Campus Profile', link: '/' },
      { label: 'Campus Map', link: '/' },
      { label: 'Campus APP Ui', link: '/' },
      { label: 'Feature / Content', link: '/' },
      { label: 'Users', link: '/' },
    ],
  },
];

export function NavbarNested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar} style={{ height: '100%'}}>

      <ScrollArea className={classes.links} >
        <div className={classes.linksInner} style={{ }}>{links}</div>
      </ScrollArea>

    </nav>
  );
}