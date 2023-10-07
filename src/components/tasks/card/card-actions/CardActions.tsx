import React from 'react';
import { TaskModel } from '@/models/Task';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Delete, MoreHoriz, EditNote } from '@mui/icons-material';
import * as s from './styled-card-actions';

type CardProps = {
  task: TaskModel;
  index?: number;
  remove: (
    id: number,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => void;
  openEditModal: (id: number) => void;
};

const CardActions = ({ task, remove, openEditModal }: CardProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHoriz />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <s.Item
          onClick={() => openEditModal(task.id)}
        >
          <EditNote />Editar
        </s.Item>
        <s.Item
          onClick={(event) => {
            handleClose();
            remove(task.id, event);
          }}
        >
          <Delete />Apagar
        </s.Item>
      </Menu>
    </>
  );
};

export default CardActions;
