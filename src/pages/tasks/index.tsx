import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import TasksDroppable from './components/tasks-droppable/TasksDroppable';
import { TaskModel } from '@/models/Task';
import { NewTaskModal } from './components/NewTaskModal';
import { EditTaskModal } from './components/EditTaskModal';
import RemoveTaskModal from './components/remove-task-modal/RemoveTaskModal';
import taskService from '@/services/TasksService';
import { toast } from 'react-toastify';
import imageNotFound from '../../../public/assets/images/not-found.svg';
import * as s from './styled-tasks-index';
import useDebounce from '@/hooks/useDebounce';

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [newModal, setNewModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<TaskModel>();
  const [taskToRemove, setTaskToRemove] = useState<TaskModel>();
  const [removeModal, setRemoveModal] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search, 500);

  const createTask = () => {
    setNewModal(true);
  };

  const editTask = (id: number) => {
    setTaskToEdit(tasks.find((task) => task.id === id));
    setEditModal(true);
  };

  const removeTask = (id: number, event: any) => {
    event.stopPropagation();
    setTaskToRemove(tasks.find((task) => task.id === id));
    setRemoveModal(true);
  };

  const handleRemove = () => {
    if (taskToRemove) {
      setTasks((tasks) => tasks.filter((task) => task.id !== taskToRemove.id));
      setRemoveModal(false);
      toast.success('Tarefa removida com sucesso!');
    }
  };

  const getSearchTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(debouncedValue.toLowerCase()),
    );
  }, [debouncedValue, tasks]);

  useEffect(() => {
    setTasks(taskService.getTask());
  }, []);

  useEffect(() => {
    taskService.setTask(tasks);
  }, [tasks]);

  return (
    <>
      <Head>
        <title>Tarefas | Task Manager</title>
        <meta
          name="description"
          content="Explore todas as tarefas pendentes e priorize suas atividades com eficiência!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <NewTaskModal open={newModal} setOpen={setNewModal} setTasks={setTasks} />
      {taskToEdit && (
        <EditTaskModal
          open={editModal}
          setOpen={setEditModal}
          setTasks={setTasks}
          task={taskToEdit}
          setTaskToEdit={setTaskToEdit}
        />
      )}
      {removeModal && (
        <RemoveTaskModal
          open={removeModal}
          setOpen={setRemoveModal}
          onClickConfirm={handleRemove}
        />
      )}
      {getSearchTasks.length > 0 ? (
        <TasksDroppable
          tasks={getSearchTasks}
          setTasks={setTasks}
          openEditModal={editTask}
          remove={(
            id: number,
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
          ) => removeTask(id, event)}
        />
      ) : (
        <s.Empty>
          <Image src={imageNotFound} alt="Nenhuma tarefa encontrada" />
          <p>Nada aqui ainda! Que tal adicionar algo?</p>
        </s.Empty>
      )}
    </>
  );
};

export default Tasks;
