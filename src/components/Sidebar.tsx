import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './../styles/components/Sidebar.module.scss';
import { SpaceDashboard, TaskAlt } from '@mui/icons-material';
import { ChevronLeft, RocketLaunch } from '@mui/icons-material';

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

  const toggleOpen = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  return (
    <div className={styles['sidebar']}>
      <ChevronLeft onClick={toggleOpen} className={`${styles['sidebar__toggle']} ${isOpen ? styles['sidebar__toggle--open'] : styles['sidebar__toggle--closed']}`} />
      <nav className={`${styles['sidebar__navigation']} ${isOpen ? styles['sidebar__navigation--open'] : styles['sidebar__navigation--closed']}`}>
        <h1 className={isOpen ? styles['sidebar__title'] : styles['sidebar__icon']}>
          {!isOpen && <RocketLaunch />}
          {isOpen && 'Tasks'}
        </h1>
        <ul className={styles['sidebar__menu']}>
          {routes.map(route => (
            <li
              style={currentRoute === route.path ? { color: '#9854cb' } : {}}
              key={route.name}
              className={styles[isOpen ? 'sidebar__menu__link' : 'sidebar__menu__icon']}
              onClick={() => goToPage(route.path)}>
              {isOpen ? route.name : route.icon}
            </li>
          ))}
        </ul>
      </nav>
    </div>
    /*     <div className={styles['sidebar']}>
          <div className={styles['sidebar__container']}>
            <ChevronLeft onClick={toggleOpen} className={styles[isOpen ? 'chevron-close' : 'chevron-open']} />
            <nav className={`${styles['navigation']} ${isOpen ? styles['navigation-open'] : styles['navigation-closed']}`}>
              <h1 className={isOpen ? styles['navigation__title'] : styles['navigation__icon']}>
                {!isOpen && <RocketLaunch />}
                {isOpen && 'Tasks'}
              </h1>
              <ul className={styles['navigation__menu']}>
                {routes.map(route => (
                  <li
                    style={currentRoute === route.path ? { color: '#9854CB' } : {}}
                    key={route.name}
                    className={styles[isOpen ? 'navigation__menu__link' : 'navigation__menu__icon']}
                    onClick={() => goToPage(route.path)}>
                    {isOpen ? route.name : route.icon}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div> */
  );
};

export default Sidebar;
