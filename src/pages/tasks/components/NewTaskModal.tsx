import { FormControl, Input, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState } from 'react';
import { TaskModel } from '@/models/Task';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import * as s from './styled-modals';

type NewTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
};

dayjs.extend(timezone);
dayjs.extend(utc);

export const NewTaskModal = ({ open, setOpen, setTasks }: NewTaskModalProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<TaskModel['type']>('personal');
  const [endAt, setEndAt] = useState<Date>(dayjs().add(1, 'day').toDate());
  const tasksTypes = [
    { value: 'work', label: 'Trabalho' },
    { value: 'personal', label: 'Pessoal' },
  ];

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setType('personal');
  };

  const handleClose = () => {
    resetFields();
    setOpen(false);
  };

  const handleCreate = () => {
    const task: TaskModel = {
      id: Math.random(),
      title,
      description,
      type,
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
        <s.BoxContainer>
          <s.Top>
            <s.Title>Adicionar nova tarefa</s.Title>
            <s.CloseButton onClick={handleClose}>
              <Close />
            </s.CloseButton>
          </s.Top>
          <TextField required label="Título da tarefa" type="text" id="standard-required" variant="standard" value={title} onChange={(e) => setTitle(e.target.value)} />
          <s.Textarea placeholder="Descrição da tarefa" value={description} onChange={(e) => setDescription(e.target.value)} />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              required
              label="Categoria"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              onChange={(e) => setType(e.target.value as TaskModel['type'])}
            >
              {tasksTypes.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <s.Label>Data de entrega</s.Label>
          <Input type="date" value={dayjs(endAt).format('YYYY-MM-DD')} onChange={(e) => setEndAt(dayjs(e.target.value).toDate())} />
          <s.CreateButton onClick={handleCreate}>Criar tarefa</s.CreateButton>
        </s.BoxContainer>
      </Modal>
    </>
  );
};
