import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SpaceDashboard, NoteAlt, FolderOpen, Add, Delete } from '@mui/icons-material';
import { SwitchMode } from './switch/Switch';
import { RocketLaunch } from '@mui/icons-material';
import { ListService } from '@/services/ListService';
import NewListModal from '../lists/NewListModal';
import { TaskTypeOption } from '@/models/Task';
import RemoveModal from '../remove-modal/RemoveModal';
import { toast } from 'react-toastify';
import TaskService from '@/services/TasksService';
import * as s from './styled-sidebar';

type SidebarRoute = {
  id: string;
  path: string;
  name: string;
  icon: React.JSX.Element;
  subItems?: {
    label: string;
    value: string;
  }[];
  action?: (value: boolean) => void;
}
interface SidebarProps {
  theme: string;
  toggleTheme: () => void;
}

export const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const subItemQuery = router.query.subItem;
  const [subItensOpen, setSubItensOpen] = useState(false);
  const [addListIsOpen, setAddListIsOpen] = useState(false);
  const [lists, setLists] = useState<TaskTypeOption[]>([]);
  const [removeModal, setRemoveModal] = useState<boolean>(false);
  const [subItemToRemove, setSubItemToRemove] = useState<string>('');

  const routes: SidebarRoute[] = [
    {
      id: 'home',
      path: '/',
      name: 'Atividades',
      icon: <SpaceDashboard />,
    },
    {
      id: 'tasks',
      path: '/tasks',
      name: 'Tarefas',
      icon: <NoteAlt />,
    },
    {
      id: 'lists',
      path: '/lists',
      name: 'Listas',
      icon: <FolderOpen />,
      action: setSubItensOpen,
      subItems: lists
    },
  ];

  const handleRemoveList = (subItem: string) => {
    if (ListService.getLists().length === 1) {
      toast.error('É necessário ter pelo menos uma lista');
      setRemoveModal(false);
      return;
    }
    TaskService.removeTasksWithListId(subItem);
    ListService.removeList(subItem);
    setRemoveModal(false);
    router.push('/tasks');

  };

  useEffect(() => {
    setLists(ListService.getLists());
  }, []);

  useEffect(() => {
    if (!addListIsOpen || !removeModal) {
      setLists(ListService.getLists());
    }
  }, [addListIsOpen, removeModal]);

  const goToPage = useCallback(
    (page: any) => {
      router.push(page);
    },
    [router],
  );

  return (
    <>
      {
        addListIsOpen && (
          <NewListModal open={addListIsOpen} setOpen={setAddListIsOpen} />
        )
      }
      {
        removeModal && (
          <RemoveModal
            open={removeModal}
            setOpen={setRemoveModal}
            subTitle={'Todas as tarefas dessa lista serão excluídas'}
            onClickConfirm={() => {
              handleRemoveList(subItemToRemove);
            }}
          />
        )
      }
      <s.Container>
        <s.Navigation>
          <s.Logo>
            <s.RocketIcon><RocketLaunch fontSize={'small'} /></s.RocketIcon>
            <h3>TaskManager</h3>
          </s.Logo>
          <s.Menu>
            {routes.map((route) => (
              <div key={route.id}>
                <s.Link
                  subItems={Boolean(route.subItems)}
                  key={route.id}
                  style={currentRoute === route.path ? { color: '#007AFF' } : {}}
                  onClick={() => {
                    if (route.path === '/lists') {
                      setSubItensOpen(!subItensOpen);
                      return;
                    }
                    goToPage(route.path);
                  }}
                >
                  {route.icon} {route.name}
                </s.Link>
                <s.SubItems>
                  {route?.subItems?.map((subItem) => (
                    <div
                      key={subItem.label}
                      onClick={() => {
                        router.push(`/tasks/${subItem.value}`);
                      }}
                    >
                      <p
                        style={{
                          color: subItemQuery === subItem.value ? '#007AFF' : '',
                        }}

                      >
                        {subItem.label}
                      </p>
                      <Delete color={'error'} fontSize={'small'} onClick={(e) => {
                        e.stopPropagation();
                        setRemoveModal(true);
                        setSubItemToRemove(subItem.value);
                      }}/>
                    </div>
                  ))}
                </s.SubItems>
              </div>
            ))}
            <s.Link
              onClick={() => setAddListIsOpen(true)}
              style={{
                paddingLeft: '10px'
              }}
            >
              <Add />
              Adicionar lista
            </s.Link>
          </s.Menu>
          <SwitchMode theme={theme} toggleTheme={toggleTheme} />
        </s.Navigation>
      </s.Container>
    </>
  );
};
