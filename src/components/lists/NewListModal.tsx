import React from 'react';
import { Modal } from '@mui/material';
import { toast } from 'react-toastify';
import { Close } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';
import { TaskTypeOption } from '@/models/Task';
import { ListService } from '@/services/ListService';
import useKeypress from '@/hooks/useKeypress';
import * as s from './styled-new-list-modal';

type NewListModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Fields = {
  title: string;
}

const NewListModal = ({
  open,
  setOpen,
}: NewListModalProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  useKeypress('Escape', () => {
    if (open) {
      setOpen(false);
    }
  });

  const {
    control,
    formState: { errors },
    watch,
    handleSubmit
  } = useForm<Fields>();

  const submit = (data: Fields) => {
    const list: TaskTypeOption = {
      value: data.title,
      label: data.title
    };
    ListService.addList(list);

    handleClose();
    toast.success('Lista criada com sucesso!');
  };

  return (
    <Modal open={open} disableAutoFocus>
      <form onSubmit={handleSubmit(submit)} onKeyDown={
        (e) => {
          if (e.key === 'Enter') {
            submit(watch());
          }
        }
      }>
        <s.BoxContainer>
          <s.Top>
            <s.Title>Adicionar nova lista</s.Title>
            <s.CloseButton onClick={handleClose}>
              <Close />
            </s.CloseButton>
          </s.Top>
          <Controller
            name='title'
            defaultValue=''
            control={control}
            rules={{
              required: {
                value: true,
                message: '*Campo obrigatório'
              },
            }}
            render={({ field: { value, onChange } }) => (
              <s.StyledTextField
                label="Título da lista"
                type="text"
                variant="outlined"
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
          {errors?.title && <p>{errors.title?.message}</p>}
          <s.CreateButton type="submit">Criar lista</s.CreateButton>
        </s.BoxContainer>
      </form>
    </Modal>
  );
};

export default NewListModal;
