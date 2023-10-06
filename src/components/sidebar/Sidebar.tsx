import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { SpaceDashboard, NoteAlt, FolderOpen } from '@mui/icons-material';
import { SwitchMode } from './switch/Switch';
import { RocketLaunch } from '@mui/icons-material';
import * as s from './styled-sidebar';

type SidebarRoute = {
  path: string;
  name: string;
  icon: React.JSX.Element;
  subItems?: {
    label: string;
    value: string;
  }[];
}

interface SidebarProps {
  theme: string;
  toggleTheme: () => void;
}

export const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  const lists = JSON.parse(localStorage.getItem('lists') || '[]');
  console.log('lists', lists);
  const routes: SidebarRoute[] = [
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
      subItems: lists
    },
  ];
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
        <s.Logo>
          <s.RocketIcon><RocketLaunch fontSize={'small'} /></s.RocketIcon>
          <h3>TaskManager</h3>
        </s.Logo>
        <s.Menu>
          {routes.map((route) => (
            <>
              <s.Link
                style={currentRoute === route.path ? { color: '#007AFF' } : {}}
                key={route.name}
                onClick={() => goToPage(route.path)}
              >
                {route.icon} {route.name}
              </s.Link>
              <s.SubItem>
                {route?.subItems?.map((subItem, index) => (
                  <p key={index} onClick={() => goToPage(`tasks/${subItem.label}`)}>
                    {subItem.label}
                  </p>
                ))}
              </s.SubItem>
            </>
          ))}
        </s.Menu>
        <SwitchMode theme={theme} toggleTheme={toggleTheme} />
      </s.Navigation>
    </s.Container>
  );
};
