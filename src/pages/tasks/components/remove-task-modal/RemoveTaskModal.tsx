import { Box, Modal } from '@mui/material';
import styles from '../../../../styles/pages/tasks/components/RemoveTaskModal.module.scss';
import cn from 'classnames';
import * as s from './styled-remove-task-modal';

type RemoveTaskModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClickConfirm: () => void;
};

const RemoveTaskModal = ({
  open,
  onClickConfirm,
  setOpen,
}: RemoveTaskModalProps) => {
  return (
    <>
      <Modal open={open}>
        <s.BoxContainer>
          <s.Title>Você tem certeza que deseja excluir?</s.Title>
          <s.ConfirmButton onClick={onClickConfirm}>Excluir</s.ConfirmButton>
          <s.CancelButton onClick={() => setOpen(false)}>
            Cancelar
          </s.CancelButton>
        </s.BoxContainer>
      </Modal>
    </>
  );
};

export default RemoveTaskModal;
