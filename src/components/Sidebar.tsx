import React from 'react';
import { useRouter } from 'next/router';
import styles from './../styles/components/Sidebar.module.scss';

const Sidebar = () => {
  const router = useRouter();
  const routes = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/tasks',
      name: 'Tarefas'
    },
  ];

  const goToPage = (page: string) => {
    router.push(page);
  };

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__container']}>
        <h1 className={styles['sidebar__title']}>✨</h1>
        <ul className={styles['sidebar__list']}>
          {routes.map(route => {
            return (
              <li key={route.name} className={styles['sidebar__list__item']} onClick={() => goToPage(route.path)}>{route.name}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;