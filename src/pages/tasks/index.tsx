import React, { useEffect, useState } from 'react';
import { TasksDroppable } from './components/tasks-droppable';
import { TaskModel } from '@/models/Task';
import { NewTaskModal } from './components/new-task-modal';
import { EditTaskModal } from './components/edit-task-modal';
import { RemoveTaskModal } from './components/remove-task.moda';
import taskService from '@/services/TasksService';
import { toast } from 'react-toastify';

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [newModal, setNewModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<TaskModel>();
  const [taskToRemove, setTaskToRemove] = useState<TaskModel>();
  const [removeModal, setRemoveModal] = useState<boolean>(false);

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

  useEffect(() => {
    setTasks(taskService.getTask());
  }, []);

  useEffect(() => {
    taskService.setTask(tasks);
  }, [tasks]);

  return (
    <div>
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
      <h1>Tasks</h1>
      <button onClick={createTask}>new task</button>
      {tasks.length > 0 ? (
        <TasksDroppable
          tasks={tasks}
          setTasks={setTasks}
          openEditModal={editTask}
          remove={(id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => removeTask(id, event)}
        />
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
};

export default Tasks;