import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SpaceDashboard, TaskAlt } from '@mui/icons-material';
import { RocketLaunch } from '@mui/icons-material';
import { SwitchMode } from './Switch';
import * as s from './styled-sidebar';

interface SidebarProps {
  theme: string;
  toggleTheme: () => void;
}

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: <SpaceDashboard />,
  },
  {
    path: '/tasks',
    name: 'Tarefas',
    icon: <TaskAlt />,
  },
];

export const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const goToPage = useCallback(
    (page: any) => {
      router.push(page);
    },
    [router],
  );

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <s.Container>
      <s.Toggle onClick={toggleOpen} open={isOpen} />
      {isMounted && (
        <s.Navigation open={isOpen}>
          <s.Title>
            <RocketLaunch />
          </s.Title>
          <s.Menu>
            {routes.map((route) => (
              <s.Link style={currentRoute === route.path ? { color: '#9854cb' } : {}} key={route.name} onClick={() => goToPage(route.path)} open={isOpen}>
                {isOpen ? route.name : route.icon}
              </s.Link>
            ))}
          </s.Menu>
          <SwitchMode theme={theme} toggleTheme={toggleTheme} />
        </s.Navigation>
      )}
    </s.Container>
  );
};
