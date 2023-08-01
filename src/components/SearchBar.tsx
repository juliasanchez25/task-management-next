import React from 'react';
import styles from './../styles/components/SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
      <div className={styles['search-bar__content']}>
        <input placeholder='Pesquisar' />🔎
      </div>
    </div>
  );
};

export default SearchBar;