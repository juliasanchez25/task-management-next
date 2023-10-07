import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';
import { TaskModel, List, TaskTypeOption } from '@/models/Task';
import { toast } from 'react-toastify';
import useKeypress from '../../hooks/useKeypress';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import * as s from './styled-modals';
import { ListService } from '@/services/ListService';
import TaskService from '@/services/TasksService';
import { Controller, useForm } from 'react-hook-form';

type EditTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskToEdit: React.Dispatch<React.SetStateAction<TaskModel | undefined>>;
  task: TaskModel;
};

type Fields = {
  list: List;
  title: string;
  description: string;
  endAt: string;
}

dayjs.extend(timezone);
dayjs.extend(utc);

export const EditTaskModal = ({
  open,
  task,
  setOpen,
  setTaskToEdit,
}: EditTaskModalProps) => {
  const [tasksLists, setTasksTypes]  = useState<TaskTypeOption[]>([]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Fields>();

  useEffect(() => {
    const createdLists = ListService.getLists();
    setTasksTypes(createdLists);
  }, []);

  const handleClose = () => {
    reset();
    setOpen(false);
    setTaskToEdit(undefined);
  };

  useKeypress('Escape', () => {
    if (open) {
      setOpen(false);
    }
  });

  const handleEdit = (data: Fields) => {
    const editedTask = { ...task, ...data, endAt: dayjs(data.endAt).toDate() };

    TaskService.substituteTask(editedTask);

    handleClose();
    setTaskToEdit(undefined);
    toast.success('Tarefa editada com sucesso!');
  };

  return (
    <Modal open={open} disableAutoFocus>
      <form onSubmit={handleSubmit(handleEdit)}>
        <s.BoxContainer>
          <s.Top>
            <s.Title>Editar tarefa</s.Title>
            <s.CloseButton onClick={handleClose}>
              <Close />
            </s.CloseButton>
          </s.Top>
          <Controller
            name='title'
            control={control}
            defaultValue={task.title}
            rules={{
              required: {
                value: true,
                message: '*Campo obrigatório'
              },
            }}
            render={({ field: { value, onChange } }) => (
              <s.StyledTextField
                label="Título da tarefa"
                type="text"
                variant="outlined"
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
          {errors?.title && <s.ErrorMessage>{errors.title?.message}</s.ErrorMessage>}
          <Controller
            name='description'
            control={control}
            defaultValue={task.description}
            render={({ field: { value, onChange } }) => (
              <s.StyledTextField
                placeholder="Notas"
                value={value}
                type="text"
                variant="outlined"
                onChange={(e) => onChange(e.target.value)}
                multiline
              />
            )} />
          <FormControl>
            <s.StyledInputLabel id="demo-simple-select-label">
              Lista
            </s.StyledInputLabel>
            <Controller
              name="list"
              control={control}
              defaultValue={task.list}
              rules={{
                required: {
                  value: true,
                  message: '*Campo obrigatório'
                },
              }}
              render={({ field: { value, onChange } }) => (
                <s.StyledSelect
                  value={value}
                  label="Lista"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="outlined"
                  onChange={(e) => onChange(e.target.value)}
                >
                  {tasksLists.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </s.StyledSelect>
              )}
            />
          </FormControl>
          {errors?.list && <s.ErrorMessage>{errors.list?.message}</s.ErrorMessage>}
          <s.Label>Data de entrega</s.Label>
          <Controller
            name='endAt'
            control={control}
            defaultValue={(dayjs(task.endAt) || dayjs().add(1, 'day')).format('YYYY-MM-DD')}
            render={({ field: { value, onChange } }) => (
              <s.StyledTextField
                type="date"
                value={value}
                onChange={(e) => onChange(dayjs(e.target.value).format('YYYY-MM-DD'))}
              />
            )} />
          <s.CreateButton type="submit">Salvar</s.CreateButton>
        </s.BoxContainer>
      </form>
    </Modal>
  );
};
