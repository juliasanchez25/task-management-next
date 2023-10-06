import React, { useState } from 'react';
import NewListModal from './new-list-modal/NewListModal';
import { Add } from '@mui/icons-material';
import * as s from './styled-lists-index';

const Lists = () => {
  const [newModal, setNewModal] = useState<boolean>(false);

  const createList = () => {
    setNewModal(true);
  };

  return (
    <s.Container>
      <s.Main>
        <s.MainTitle>Minhas listas</s.MainTitle>
        <s.CreateListButton
          onClick={createList}
        >
          <Add />
        </s.CreateListButton>
      </s.Main>
      <NewListModal open={newModal} setOpen={setNewModal} />
    </s.Container>
  );
};

export default Lists;
