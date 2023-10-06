import React, { useEffect, useState } from 'react';
import NewListModal from '@/components/lists/NewListModal';
import TasksDroppable from '@/components/tasks-droppable/TasksDroppable';
import { TaskModel, TaskTypeOption } from '@/models/Task';
import { ListModel } from '@/models/List';
import TasksService from '@/services/TasksService';
import { MenuItem } from '@mui/material';
import * as s from '../../styles/styled-lists-index';
import { Delete } from '@mui/icons-material';
import RemoveModal from '@/components/remove-modal/RemoveModal';

const Lists = () => {
  const [lists, setLists] = useState<TaskModel[]>([]);
  const [newModal, setNewModal] = useState<boolean>(false);
  const [allTasks, setAllTasks] = useState<TaskModel[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>([]);
  const [tasksTypes, setTasksTypes]  = useState<TaskTypeOption[]>([]);
  const [selectedTaskType, setSelectedTaskType] = useState<string | null>('Trabalho');

  const [listToRemove, setListToRemove] = useState<ListModel>();
  const [removeModal, setRemoveModal] = useState<boolean>(false);

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

  const removeList = (id: number, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.stopPropagation();
    setListToRemove(lists.find((list) => list.id === id));
    setRemoveModal(true);
  };

  const handleRemove = () => {
    if (listToRemove) {
      setLists((lists) => lists.filter((list) => list.id !== listToRemove.id));
      setRemoveModal(false);
    }
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
        <s.StyledSelect
          value={selectedTaskType}
          onChange={(e) => {
            setSelectedTaskType(e.target.value as string);
          }}>
          {tasksTypes.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </s.StyledSelect>
        <s.ButtonsContainer>
          <s.CreateNewListButton
            onClick={createList}
          >
            Criar nova lista
          </s.CreateNewListButton>
          <s.DeleteListButton
          >
            <Delete />
            Apagar lista
          </s.DeleteListButton>
        </s.ButtonsContainer>
      </s.Main>
      <TasksDroppable
        tasks={filteredTasks}
        setTasks={setFilteredTasks}
        openEditModal={openEditModal}
        remove={remove}
      />
      <NewListModal open={newModal} setOpen={setNewModal} />
      {removeModal && (
        <RemoveModal
          open={removeModal}
          setOpen={setRemoveModal}
          onClickConfirm={handleRemove}
        />
      )}
    </s.Container>
  );
};

export default Lists;
