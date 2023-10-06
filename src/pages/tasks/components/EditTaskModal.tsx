import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';
import { TaskModel, TaskTypeOption } from '@/models/Task';
import { toast } from 'react-toastify';
import TaskDates from './card/task-dates/TaskDates';
import useKeypress from '../../../hooks/useKeypress';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import * as s from './styled-modals';

type EditTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  setTaskToEdit: React.Dispatch<React.SetStateAction<TaskModel | undefined>>;
  task: TaskModel;
};

dayjs.extend(timezone);
dayjs.extend(utc);

export const EditTaskModal = ({
  open,
  task,
  setOpen,
  setTasks,
  setTaskToEdit,
}: EditTaskModalProps) => {
  const [title, setTitle] = useState<string>(task.title || '');
  const [description, setDescription] = useState<string>(
    task.description || '',
  );
  const [type, setType] = useState<TaskModel['type']>(task.type || 'personal');
  const [endAt, setEndAt] = useState<Date>(
    task.endAt || dayjs().add(1, 'day').toDate(),
  );
  const [tasksTypes, setTasksTypes]  = useState<TaskTypeOption[]>([]);

  useEffect(() => {
    const createdLists = JSON.parse(localStorage.getItem('lists') || '[]') as TaskTypeOption[];
    setTasksTypes([
      { value: 'Trabalho', label: 'Trabalho' },
      { value: 'Pessoal', label: 'Pessoal' },
      ...createdLists
    ]);
  }, []);

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setType('personal');
  };

  const handleClose = () => {
    resetFields();
    setOpen(false);
    setTaskToEdit(undefined);
  };

  useKeypress('Escape', () => {
    if (open) {
      setOpen(false);
    }
  });

  const handleEdit = () => {
    const editedTask = { ...task, title, description, type, endAt };

    setTasks((tasks) => {
      return tasks.map((mappedTask) => {
        if (mappedTask.id === task.id) {
          return editedTask;
        }
        return mappedTask;
      });
    });

    handleClose();
    setTaskToEdit(undefined);
    toast.success('Tarefa editada com sucesso!');
  };

  return (
    <>
      <Modal open={open}>
        <s.BoxContainer>
          <s.Top>
            <s.CloseButton onClick={handleClose}>
              <Close />
            </s.CloseButton>
          </s.Top>
          <s.StyledTextField
            id="standard-required"
            label="Título da tarefa"
            type="text"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <s.StyledTextField
            placeholder="Notas"
            value={description}
            type="text"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
            multiline
          />
          <FormControl>
            <s.StyledInputLabel id="demo-simple-select-label">
              Categoria
            </s.StyledInputLabel>
            <s.StyledSelect
              required
              label="Categoria"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              value={type}
              onChange={(e) => setType(e.target.value as TaskModel['type'])}
            >
              {tasksTypes.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </s.StyledSelect>
          </FormControl>
          <s.Label>Data de entrega</s.Label>
          <s.StyledTextField
            type="date"
            value={dayjs(endAt).format('YYYY-MM-DD')}
            onChange={(e) => setEndAt(dayjs(e.target.value).toDate())}
          />
          <TaskDates task={task} />
          <s.CreateButton onClick={handleEdit}>Editar tarefa</s.CreateButton>
        </s.BoxContainer>
      </Modal>
    </>
  );
};
