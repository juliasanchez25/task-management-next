import React from 'react';
import styles from './../styles/components/SearchBar.module.scss';
import { SearchTwoTone } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
      <input className={styles['search-bar__input']} placeholder='Pesquisar' />
      <SearchTwoTone htmlColor='#808080' className={styles['search-bar__icon']}/>
    </div>
  );
};

export default SearchBar;