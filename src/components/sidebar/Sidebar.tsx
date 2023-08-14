import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { SpaceDashboard, TaskAlt } from '@mui/icons-material';
import { RocketLaunch } from '@mui/icons-material';
import * as s from './styled-sidebar';

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: <SpaceDashboard />
  },
  {
    path: '/tasks',
    name: 'Tarefas',
    icon: <TaskAlt />
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const goToPage = useCallback((page: any) => {
    router.push(page);
  }, [router]);

  const toggleOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <s.Container>
      <s.Toggle onClick={toggleOpen} open={isOpen} />
      <s.Navigation open={isOpen}>
        <s.Title>
          {!isOpen && <RocketLaunch />}
          {isOpen && 'Tasks'}
        </s.Title>
        <s.Menu>
          {routes.map(route => (
            <s.Link
              style={currentRoute === route.path ? { color: '#9854cb' } : {}}
              key={route.name}
              onClick={() => goToPage(route.path)}
              open={isOpen}>
              {isOpen ? route.name : route.icon}
            </s.Link>
          ))}
        </s.Menu>
      </s.Navigation>
    </s.Container>
  );
};

export default Sidebar;
