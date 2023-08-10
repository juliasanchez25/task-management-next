import { Box, Input, MenuItem, Modal, Select, TextareaAutosize } from '@mui/material';
import styles from './../../../styles/pages/tasks/components/NewTaskModal.module.scss';
import { useState } from 'react';
import { TaskModel } from '@/models/Task';

type RemoveTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClickConfirm: () => void;
}

export const RemoveTaskModal = ({ open, onClickConfirm, setOpen }: RemoveTaskModalProps) => {
  return <>
    <Modal open={open}>
      <Box className={styles['modal']}>
        <h3>você tem certeza que deseja excluir?</h3>
        <button onClick={onClickConfirm}>sim</button>
        <button onClick={() => setOpen(false)}>nao</button>
      </Box>
    </Modal>
  </>;
};