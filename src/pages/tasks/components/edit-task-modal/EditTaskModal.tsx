import { Box, FormControl, Input, InputLabel, MenuItem, Modal, Select, TextField, TextareaAutosize } from '@mui/material';
import { Close } from '@mui/icons-material';
import styles from './../../../../styles/pages/tasks/components/NewTaskModal.module.scss';
import { useState } from 'react';
import { TaskModel } from '@/models/Task';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

type EditTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  setTaskToEdit: React.Dispatch<React.SetStateAction<TaskModel | undefined>>;
  task: TaskModel;
}

dayjs.extend(timezone);
dayjs.extend(utc);

export const EditTaskModal = ({ open, task, setOpen, setTasks, setTaskToEdit }: EditTaskModalProps) => {
  const [title, setTitle] = useState<string>(task.title || '');
  const [description, setDescription] = useState<string>(task.description || '');
  const [type, setType] = useState<TaskModel['type']>(task.type || 'personal');
  const [endAt, setEndAt] = useState<Date>(task.endAt || dayjs().add(1, 'day').toDate());
  const tasksTypes = [{ value: 'work', label: 'Trabalho' }, { value: 'personal', label: 'Pessoal' }];

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

  return <>
    <Modal open={open}>
      <Box className={styles['modal']}>
        <div className={styles['modal__top']}>
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
        <button onClick={handleEdit} className={styles['modal__create-button']}>Editar tarefa</button>
      </Box>
    </Modal>
  </>;
};