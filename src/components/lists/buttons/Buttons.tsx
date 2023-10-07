import * as s from './styled-buttons';
import { Delete } from '@mui/icons-material';

const Buttons = () => {
  return (
    <s.Container>
      <s.CreateNewListButton>
        Criar nova lista
      </s.CreateNewListButton>
      <s.DeleteListButton>
        <Delete />
        Apagar lista
      </s.DeleteListButton>
    </s.Container>
  );
};

export default Buttons;
