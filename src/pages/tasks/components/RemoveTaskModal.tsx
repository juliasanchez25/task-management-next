import { Box, Modal } from '@mui/material';
import cn from 'classnames';
import styles from './../../../styles/pages/tasks/components/RemoveTaskModal.module.scss';

type RemoveTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClickConfirm: () => void;
}

export const RemoveTaskModal = ({ open, onClickConfirm, setOpen }: RemoveTaskModalProps) => {
  return <>
    <Modal open={open}>
      <Box className={styles['modal']}>
        <h1 className={styles['modal__title']}>Você tem certeza que deseja excluir?</h1>
        <button className={cn(styles['modal__button'], styles['modal__button--confirm'])} onClick={onClickConfirm}>Excluir</button>
        <button className={cn(styles['modal__button'], styles['modal__button--cancel'])} onClick={() => setOpen(false)}>Cancelar</button>
      </Box>
    </Modal>
  </>;
};