import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import TasksDroppable from '@/components/tasks-droppable/TasksDroppable';
import { TaskModel } from '@/models/Task';
import { NewTaskModal } from '@/components/tasks/NewTaskModal';
import taskService from '@/services/TasksService';
import useDebounce from '@/hooks/useDebounce';
import imageNotFound from '../../../public/assets/images/not-found.svg';
import * as s from '../../styles/styled-tasks-index';

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>(
    taskService.getTasks(),
  );
  const [newModal, setNewModal] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search, 500);

  const createTask = () => {
    setNewModal(true);
  };

  const getSearchTasks = useMemo(() => {
    return tasks?.filter((task) =>
      task?.title?.toLowerCase().includes(debouncedValue.toLowerCase()),
    );
  }, [debouncedValue, tasks]);

  return (
    <>
      <Head>
        <title>Tarefas | Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <s.Container>
        <s.Main>
          <s.MainTitle>Minhas tarefas</s.MainTitle>
          <s.SearchBox>
            <s.SearchInput
              type="text"
              placeholder="Pesquisar tarefa..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <s.SearchIcon />
          </s.SearchBox>
          <s.CreateTaskButton onClick={createTask}>
            Criar nova tarefa
          </s.CreateTaskButton>
        </s.Main>
        {newModal && <NewTaskModal
          open={newModal}
          setOpen={setNewModal}
          refreshTasks={() => {
            setTasks(taskService.getTasks());
          }}
        />}
        {getSearchTasks.length > 0 ? (
          <TasksDroppable
            tasks={getSearchTasks}
            refreshTasks={() => {
              setTasks(taskService.getTasks());
            }}
          />
        ) : (
          <s.Empty>
            <Image src={imageNotFound} priority alt="Nenhuma tarefa encontrada" />
            <p>Nada aqui ainda! Que tal adicionar algo?</p>
          </s.Empty>
        )}
      </s.Container>
    </>
  );
};

export default Tasks;
