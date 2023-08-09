import React, { useState } from 'react';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import styles from './../../../styles/pages/tasks/components/Modal.module.scss';
import { Close } from '@mui/icons-material';
import { Task } from '@/models/Task';

type ModalParams = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  modalVisible: boolean;
  setModalVisible: (param: boolean) => void
  editTask?: Task | null;
}

const Modal = ({ setTasks, modalVisible, setModalVisible, editTask }: ModalParams) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<Task['type']>(editTask?.type || 'personal');

  const handleCreateTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.random(),
        title,
        description,
        status: 'todo',
        type,
        createdAt: dayjs().format('DD/MM/YYYY HH:mm')
      }
    ]);
    setModalVisible(false);
    toast.success('Tarefa criada com sucesso!', {
      theme: 'colored'
    });
  };

  const handleEditTask = () => {
    setTasks((prevTasks) => prevTasks.map((prevTask) => {
      if (prevTask.id === editTask?.id) {
        return {
          ...prevTask,
          title: description,
          description,
          type,
        };
      }
      return prevTask;
    }));
    setModalVisible(false);
    toast.success('Tarefa editada com sucesso!', {
      theme: 'colored'
    });
  };

  return (
    <>
      {modalVisible && (
        <div className={styles['modal']}>
          <div className={styles['modal__content']}>
            <div className={styles['modal__top']}>
              <h2 className={styles['modal__top__title']}>{editTask ? 'Editar' : 'Criar nova'} tarefa</h2>
              <button onClick={() => setModalVisible(false)} className={styles['modal__top__close-button']}><Close htmlColor='#D1D1D1' /></button>
            </div>
            <form className={styles['modal__form']}>
              <input
                type='text'
                placeholder='Título da tarefa'
                className={styles['modal__input-title']}
                defaultValue={editTask?.title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                type='text'
                placeholder='Descrição da tarefa'
                className={styles['modal__input-description']}
                defaultValue={editTask?.description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value as Task['type']);
                }}>
                <option value='personal'>Pessoal</option>
                <option value='work'>Trabalho</option>
              </select>
              <button className={styles['modal__create-task-button']} onClick={editTask ? handleEditTask : handleCreateTask}>
                {editTask ? 'Editar' : 'Criar'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;