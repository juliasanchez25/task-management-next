import { Box, Input, MenuItem, Modal, Select, TextareaAutosize } from '@mui/material';
import styles from './../../../styles/pages/tasks/components/new-task-modal.module.scss';
import { useState } from 'react';
import { TaskModel } from '@/models/Task';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

type NewTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

dayjs.extend(timezone);
dayjs.extend(utc);

export const NewTaskModal = ({ open, setOpen, setTasks }: NewTaskModalProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<TaskModel['type']>('personal');
  const [endAt, setEndAt] = useState<Date>(dayjs().add(1, 'day').toDate());
  const tasksTypes = [{ value:'work', label: 'Trabalho'}, {value: 'personal', label: 'Pessoal'}];

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
      endAt
    };

    setTasks((tasks) => [...tasks, task]);
    handleClose();
    toast.success('Tarefa criada com sucesso!');
  };

  return <>
    <Modal open={open}>
      <Box className={styles['modal']}>
        <h3>Adicionar nova tarefa</h3>
        <button onClick={handleClose}>fechar modal</button>
        <Input
          placeholder='TITULO DA TAREFA'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          placeholder='DESCRICAO DA TAREFA'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select
          placeholder='TIPO DA TAREFA'
          value={type}
          onChange={(e) => setType(e.target.value as TaskModel['type'])}
        >
          {tasksTypes.map(({ value, label }) => (
            <MenuItem
              key={value}
              value={value}
            >
              {label}
            </MenuItem>
          ))}
        </Select>
        <Input
          type='date'
          value={dayjs(endAt).format('YYYY-MM-DD')}
          onChange={(e) => setEndAt(dayjs(e.target.value).toDate())}
        />
        <button onClick={handleCreate}>criar tarefa</button>
      </Box>
    </Modal>
  </>;
};