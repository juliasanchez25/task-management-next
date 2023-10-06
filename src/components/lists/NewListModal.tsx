import React from 'react';
import { Modal } from '@mui/material';
import { toast } from 'react-toastify';
import { Close } from '@mui/icons-material';
import useKeypress from '@/hooks/useKeypress';
import * as s from './styled-new-list-modal';
import { Controller, useForm } from 'react-hook-form';
import { TaskTypeOption } from '@/models/Task';

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
    handleSubmit
  } = useForm<Fields>();

  const submit = (data: Fields) => {
    const lists = JSON.parse(localStorage.getItem('lists') || '[]');
    const list: TaskTypeOption = {
      value: data.title,
      label: data.title
    };
    lists.push(list);
    localStorage.setItem('lists', JSON.stringify(lists));

    handleClose();
    toast.success('Lista criada com sucesso!');
  };

  return (
    <Modal open={open}>
      <form onSubmit={handleSubmit(submit)}>
        <s.BoxContainer>
          <s.Top>
            <s.Title>Adicionar nova lista</s.Title>
            <s.CloseButton onClick={handleClose}>
              <Close />
            </s.CloseButton>
          </s.Top>
          <Controller
            name='title'
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
