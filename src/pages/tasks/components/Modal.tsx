import React, { useState } from 'react';
import styles from './../../../styles/pages/tasks/components/Modal.module.scss';
import { Task } from '@/models/Task';

type ModalParams = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  modalVisible: boolean;
  setModalVisible: (param: boolean) => void
}

const Modal = ({ setTasks, modalVisible, setModalVisible }: ModalParams) => {
  return (
    <>
      {modalVisible && (
        <div className={styles['modal']}>
          <button onClick={() => setModalVisible(false)}>fechar</button>
          <div className={styles['modal__content']}>
            <h2>tarefa</h2>
            <p>descricao</p>
            <label>
              <input type='text' />
              <button>criar</button>
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;