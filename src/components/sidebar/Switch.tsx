import Switch from 'react-switch';
import { LightMode, DarkMode } from '@mui/icons-material';

interface SwitchProps {
  theme: string;
  toggleTheme: () => void;
}

export const SwitchMode = ({ theme, toggleTheme }: SwitchProps) => {
  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      offColor="#ffdda7"
      onColor="#6a4198"
      handleDiameter={20}
      uncheckedIcon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <LightMode htmlColor="#fcba03" sx={{ fontSize: '18px' }} />
        </div>
      }
      checkedIcon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <DarkMode htmlColor="#ffff" sx={{ fontSize: '18px' }} />
        </div>
      }
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={30}
      width={50}
      className="react-switch"
    />
  );
};
