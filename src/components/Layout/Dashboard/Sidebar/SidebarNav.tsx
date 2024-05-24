import { faGauge } from '@fortawesome/free-solid-svg-icons';
import React, { PropsWithChildren } from 'react';
import { Badge } from 'react-bootstrap';

import SidebarNavItem from '@/components/Layout/Dashboard/Sidebar/SidebarNavItem';
import { getDictionary } from '@/locales/dictionary';

// Commented out since it's not used. Uncomment if needed later.
const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <li className='nav-title px-3 py-2 mt-3 text-uppercase fw-bold'>
      {children}
    </li>
  );
};

export default async function SidebarNav() {
  const dict = await getDictionary();
  return (
    <ul className='list-unstyled'>
      <SidebarNavItem icon={faGauge} href='/'>
        {dict.sidebar.items.dashboard}
        <small className='ms-auto'>
          <Badge bg='info' className='ms-auto'>
            NEW
          </Badge>
        </small>
      </SidebarNavItem>
    </ul>
  );
}
