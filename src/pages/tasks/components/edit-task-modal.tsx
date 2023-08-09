import { Box, Input, MenuItem, Modal, Select, TextareaAutosize } from '@mui/material';
import styles from './../../../styles/pages/tasks/components/new-task-modal.module.scss';
import { useState } from 'react';
import { TaskModel } from '@/models/Task';

type EditTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  setTaskToEdit: React.Dispatch<React.SetStateAction<TaskModel | undefined>>;
  task: TaskModel;
}

export const EditTaskModal = ({ open, task, setOpen, setTasks, setTaskToEdit }: EditTaskModalProps) => {
  const [title, setTitle] = useState<string>(task.title || '');
  const [description, setDescription] = useState<string>(task.description || '');
  const [type, setType] = useState<TaskModel['type']>(task.type || 'personal');
  const tasksTypes = [{ value:'work', label: 'Trabalho'}, {value: 'personal', label: 'Pessoal'}];

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
    const newTask = { ...task, title, description, type };

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
  };

  return <>
    <Modal open={open}>
      <Box className={styles['modal']}>
        <h3>Editar tarefa</h3>
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
        <button onClick={handleEdit}>editar tarefa</button>
      </Box>
    </Modal>
  </>;
};