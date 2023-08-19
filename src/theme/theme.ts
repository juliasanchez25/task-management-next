export const lightModeTheme = {
  background: '#f3f5f9',
  purple: '#9854cb',
  lightPurple: '#d7a2ff',
  offWhite: '#fcfbff',
  dark: '#333333',
  title: '#141522',
  description: '#27104e',
  blue: '#2f80ed',
  lightBlue: '#97d5f9',
  gray: '#939393',
  lightGreen: '#ace2ac',
  green: '#42ad42',
  lightRed: '#f07a7a',
  red: '#b32f2f',
  yellow: '#ffd651',
  orange: '#e99517',
  pink: '#c55090',
  lightPink: '#f5b6d6',
};

export const darkModeTheme = {
  background: '#333333',
  purple: '#6a4198',
  lightPurple: '#8c72cc',
  offWhite: '#fcfbff',
  dark: '#f3f5f9',
  title: '#ececf1',
  description: '#d4cfe6',
  blue: '#1c4d9c',
  lightBlue: '#6886b4',
  gray: '#6c6c6c',
  lightGreen: '#6c996c',
  green: '#2f7030',
  lightRed: '#b35f5f',
  red: '#7c1f1f',
  yellow: '#b39841',
  orange: '#b56c11',
  pink: '#932f6f',
  lightPink: '#b28ca3',
};

const chooseThemeToExport = () => {
  return darkModeTheme;
};

export default chooseThemeToExport();