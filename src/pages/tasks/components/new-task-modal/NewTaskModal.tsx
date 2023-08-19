import { Box, FormControl, Input, InputLabel, MenuItem, Modal, Select, TextareaAutosize, TextField } from '@mui/material';
import styles from './../../../../styles/pages/tasks/components/NewTaskModal.module.scss';
import { Close } from '@mui/icons-material';
import { useRef, useState } from 'react';
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
  const tasksTypes = [{ value: 'work', label: 'Trabalho' }, { value: 'personal', label: 'Pessoal' }];

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
        <div className={styles['modal__top']}>
          <h3 className={styles['modal__title']}>Adicionar nova tarefa</h3>
          <button onClick={handleClose} className={styles['modal__close-button']}><Close /></button>
        </div>
        <TextField
          required
          label='Título da tarefa'
          type='text'
          id='standard-required'
          variant='standard'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          placeholder='Descrição da tarefa'
          className={styles['modal__textarea']}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
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
              <MenuItem
                key={value}
                value={value}
              >
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <label className={styles['modal__label']}>Data de entrega</label>
        <Input
          type='date'
          value={dayjs(endAt).format('YYYY-MM-DD')}
          onChange={(e) => setEndAt(dayjs(e.target.value).toDate())}
        />
        <button onClick={handleCreate} className={styles['modal__create-button']}>Criar tarefa</button>
      </Box>
    </Modal>
  </>;
};