import { Modal } from '@mui/material';
import useKeypress from '@/hooks/useKeypress';
import * as s from './styled-remove-modal';

type RemoveModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  subTitle?: string;
  onClickConfirm: () => void;
};

const RemoveModal = ({
  open,
  onClickConfirm,
  setOpen,
  subTitle
}: RemoveModalProps) => {
  useKeypress('Escape', () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <>
      <Modal open={open} disableAutoFocus>
        <s.BoxContainer>
          <s.Title>Você tem certeza que deseja excluir?</s.Title>
          <s.SubTitle>{subTitle}</s.SubTitle>
          <s.ButtonsContainer>
            <s.CancelButton onClick={() => setOpen(false)}>Cancelar</s.CancelButton>
            <s.ConfirmButton onClick={onClickConfirm}>Excluir</s.ConfirmButton>
          </s.ButtonsContainer>
        </s.BoxContainer>
      </Modal>
    </>
  );
};

export default RemoveModal;
