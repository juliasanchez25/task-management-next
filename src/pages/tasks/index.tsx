import React, { useState } from 'react';
import { CheckCircleRounded } from '@mui/icons-material';
import Modal from './components/Modal';
import styles from './../../styles/pages/tasks/Tasks.module.scss';
import { Task } from '@/models/Task';

const Tasks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <main className={styles['main']}>
        <h1><CheckCircleRounded htmlColor='red' />Minhas tarefas</h1>
      </main>

      <section className={styles['tasks']}>
        <div className={styles['tasks__container']}>
          <div className={styles['tasks__card']}>
            <h2>A fazer</h2>
            {tasks.map(task => (
              <div key={task.id} className={styles['tasks__card__item']}>{task.title}</div>
            ))}
          </div>
          <div className={styles['tasks__card']}>
            <h2>Em progresso</h2>
            <div className={styles['tasks__card__item']}>tarefa1</div>
          </div>
          <div className={styles['tasks__card']}>
            <h2>Finalizadas</h2>
            <div className={styles['tasks__card__item']}>tarefa1</div>
          </div>
        </div>
      </section>

      <button onClick={() => setModalVisible(true)}>Criar nova tarefa</button>

      {<Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />}
    </>
  );
};

export default Tasks;