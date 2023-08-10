import { Box, Input, MenuItem, Modal, Select, TextareaAutosize } from '@mui/material';
import { Close } from '@mui/icons-material';
import styles from './../../../styles/pages/tasks/components/NewTaskModal.module.scss';
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
    setTaskToEdit(undefined);
  };

  const handleEdit = () => {
    const newTask = { ...task, title, description, type, endAt };

    setTasks((tasks) => {
      return tasks.map((mappedTask) => {
        if (mappedTask.id === task.id) {
          return newTask;
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
          <h3>Editar tarefa</h3>
          <button onClick={handleClose} className={styles['modal__close-button']}><Close /></button>
        </div>
        <Input
          placeholder='Título da tarefa'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          placeholder='Descrição da tarefa'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select
          placeholder='Tipo da tarefa'
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
        <label>Data de entrega:</label>
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