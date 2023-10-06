import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { SpaceDashboard, NoteAlt, FolderOpen } from '@mui/icons-material';
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
    name: 'Atividades',
    icon: <SpaceDashboard />,
  },
  {
    path: '/tasks',
    name: 'Tarefas',
    icon: <NoteAlt />,
  },
  {
    path: '/lists',
    name: 'Listas',
    icon: <FolderOpen />,
  },
];

export const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const goToPage = useCallback(
    (page: any) => {
      router.push(page);
    },
    [router],
  );

  return (
    <s.Container>
      <s.Navigation>
        <s.Title>
          <RocketLaunch />
        </s.Title>
        <s.Menu>
          {routes.map((route) => (
            <s.Link
              style={currentRoute === route.path ? { color: '#9854cb' } : {}}
              key={route.name}
              onClick={() => goToPage(route.path)}
            >
              {route.icon} {route.name}
            </s.Link>
          ))}
        </s.Menu>
        <SwitchMode theme={theme} toggleTheme={toggleTheme} />
      </s.Navigation>
    </s.Container>
  );
};
