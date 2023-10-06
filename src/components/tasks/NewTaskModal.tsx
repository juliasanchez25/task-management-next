import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';
import { TaskModel, TaskType, TaskTypeOption } from '@/models/Task';
import { toast } from 'react-toastify';
import useKeypress from '@/hooks/useKeypress';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import * as s from './styled-modals';
import { Controller, useForm } from 'react-hook-form';

type NewTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
};


type Fields = {
  category: TaskType;
  title: string;
}

dayjs.extend(timezone);
dayjs.extend(utc);

export const NewTaskModal = ({
  open,
  setOpen,
  setTasks,
}: NewTaskModalProps) => {
  const [description, setDescription] = useState<string>('');
  const [endAt, setEndAt] = useState<Date>(dayjs().add(1, 'day').toDate());
  const [tasksTypes, setTasksTypes]  = useState<TaskTypeOption[]>([]);

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit
  } = useForm<Fields>();

  const resetFields = () => {
    setDescription('');
    reset();
  };

  const handleClose = () => {
    resetFields();
    setOpen(false);
  };

  useKeypress('Escape', () => {
    if (open) {
      setOpen(false);
    }
  });

  useEffect(() => {
    const createdLists = JSON.parse(localStorage.getItem('lists') || '[]') as TaskTypeOption[];
    setTasksTypes([
      { value: 'Trabalho', label: 'Trabalho' },
      { value: 'Pessoal', label: 'Pessoal' },
      ...createdLists
    ]);
  }, []);

  const submit = (data: Fields) => {
    const task: TaskModel = {
      id: Math.random(),
      title: data.title,
      description,
      type: data.category,
      status: 'todo',
      createdAt: new Date(),
      endAt,
    };

    setTasks((tasks) => [...tasks, task]);
    handleClose();
    toast.success('Tarefa criada com sucesso!');
  };

  return (
    <>
      <Modal open={open}>
        <form onSubmit={handleSubmit(submit)}>
          <s.BoxContainer>
            <s.Top>
              <s.Title>Adicionar nova tarefa</s.Title>
              <s.CloseButton onClick={handleClose}>
                <Close />
              </s.CloseButton>
            </s.Top>
            <Controller
              name='title'
              control={control}
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
                  Lista
              </s.StyledInputLabel>
              <Controller
                name="category"
                control={control}
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
                    {tasksTypes.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </s.StyledSelect>
                )}
              />
            </FormControl>
            {errors?.category && <s.ErrorMessage>{errors.category?.message}</s.ErrorMessage>}
            <s.Label>Data de entrega</s.Label>
            <s.StyledTextField
              type="date"
              value={dayjs(endAt).format('YYYY-MM-DD')}
              onChange={(e) => setEndAt(dayjs(e.target.value).toDate())}
            />
            <s.CreateButton type="submit">Criar tarefa</s.CreateButton>
          </s.BoxContainer>
        </form>
      </Modal>
    </>
  );
};
