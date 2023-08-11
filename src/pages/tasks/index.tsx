import React, { useEffect, useState, useMemo } from 'react';
import styles from './../../styles/pages/tasks/index.module.scss';
import { TasksDroppable } from './components/TasksDroppable';
import { TaskModel } from '@/models/Task';
import { NewTaskModal } from './components/NewTaskModal';
import { EditTaskModal } from './components/EditTaskModal';
import { RemoveTaskModal } from './components/RemoveTaskModal';
import taskService from '@/services/TasksService';
import { toast } from 'react-toastify';
import { Search } from '@mui/icons-material';

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [newModal, setNewModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<TaskModel>();
  const [taskToRemove, setTaskToRemove] = useState<TaskModel>();
  const [removeModal, setRemoveModal] = useState<boolean>(false);
  const [search, setSearch] = useState('');

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
    return tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
  }, [tasks, search]);

  useEffect(() => {
    setTasks(taskService.getTask());
  }, []);

  useEffect(() => {
    taskService.setTask(tasks);
  }, [tasks]);

  return (
    <>
      <main className={styles['main']}>
        <h1>Minhas tarefas</h1>
        <div className={styles['main__search-box']}>
          <input
            type='text'
            placeholder='Pesquisar tarefa...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles['main__search-box__input']}
          />
          <Search className={styles['main__search-box__icon']} />
        </div>
        <button onClick={createTask} className={styles['main__create-task-btn']}>Criar nova tarefa</button>
      </main>
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
          remove={(id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => removeTask(id, event)}
        />
      ) : (
        <div className={styles['empty-tasks']}>
          <h2>Nenhuma tarefa criada</h2>
        </div>
      )}
    </>
  );
};

export default Tasks;