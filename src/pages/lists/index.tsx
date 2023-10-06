import React, { useEffect, useState } from 'react';
import NewListModal from './new-list-modal/NewListModal';
import { Add } from '@mui/icons-material';
import * as s from './styled-lists-index';
import TasksDroppable from '../components/tasks-droppable/TasksDroppable';
import { TaskModel, TaskTypeOption } from '@/models/Task';
import TasksService from '@/services/TasksService';
import { MenuItem, Select } from '@mui/material';

const Lists = () => {
  const [newModal, setNewModal] = useState<boolean>(false);
  const [allTasks, setAllTasks] = useState<TaskModel[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>([]);
  const [tasksTypes, setTasksTypes]  = useState<TaskTypeOption[]>([]);
  const [selectedTaskType, setSelectedTaskType] = useState<string | null>('Trabalho');

  const openEditModal = (id: number) => {
    console.log(id);
  };

  const remove = (
    id: number,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    const newTasks = allTasks.filter((task) => task.id !== id);
    setAllTasks(newTasks);
  };

  useEffect(() => {
    const tasks = TasksService.getTask();
    console.log('tasks', tasks);
    setAllTasks(tasks);
  }, []);

  useEffect(() => {
    const createdLists = JSON.parse(localStorage.getItem('lists') || '[]') as TaskTypeOption[];
    setTasksTypes([
      { value: 'Trabalho', label: 'Trabalho' },
      { value: 'Pessoal', label: 'Pessoal' },
      ...createdLists
    ]);
  }, []);

  useEffect(() => {
    if (selectedTaskType === null) return;
    const filteredTasks = allTasks.filter((task) => task.type === selectedTaskType);
    setFilteredTasks(filteredTasks);
  }, [selectedTaskType, allTasks]);

  useEffect(() => {
    const allTasksWithoutSelectedType = allTasks.filter((task) => task.type !== selectedTaskType);
    const tasksToSave = [...allTasksWithoutSelectedType, ...filteredTasks];
    TasksService.setTask(tasksToSave);
  }, [filteredTasks, allTasks, selectedTaskType]);


  const createList = () => {
    setNewModal(true);
  };

  return (
    <s.Container>
      <s.Main>
        <s.MainTitle>Minhas listas</s.MainTitle>
        <Select
          value={selectedTaskType}
          onChange={(e) => {
            setSelectedTaskType(e.target.value);
          }}>
          {tasksTypes.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <s.CreateListButton
          onClick={createList}
        >
          <Add />
        </s.CreateListButton>
      </s.Main>
      <TasksDroppable
        tasks={filteredTasks}
        setTasks={setFilteredTasks}
        openEditModal={openEditModal}
        remove={remove}
      />
      <NewListModal open={newModal} setOpen={setNewModal} />
    </s.Container>
  );
};

export default Lists;
