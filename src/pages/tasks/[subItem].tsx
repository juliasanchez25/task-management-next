import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import TaskService from '@/services/TasksService';
import TasksDroppable from '@/components/tasks-droppable/TasksDroppable';
import * as s from '../../styles/styled-lists-index';
import { TaskModel } from '@/models/Task';
import { useEffect, useState } from 'react';
import { NewTaskModal } from '@/components/tasks/NewTaskModal';
import imageListNotFound from '../../../public/assets/images/list-not-found.svg';

const SubItem = () => {
  const router = useRouter();
  const { subItem } = router.query;
  const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>([]);
  const [newModal, setNewModal] = useState<boolean>(false);

  useEffect(() => {
    setFilteredTasks(TaskService.getTasksWithListId(subItem));
  }, [subItem]);

  const createTask = () => {
    setNewModal(true);
  };

  useEffect(() => {
    if (!newModal) setFilteredTasks(TaskService.getTasksWithListId(subItem));
  }, [newModal]);

  return (
    <>
      <Head>
        <title>Lista | Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <s.ListComponent>
        {newModal && (
          <NewTaskModal
            open={newModal}
            setOpen={setNewModal}
            list={subItem as string}
          />
        )}
        <s.ListHeader>
          {subItem}
          <s.CreateTaskButton onClick={createTask}>
            Criar nova tarefa
          </s.CreateTaskButton>
        </s.ListHeader>
        <div>
          {filteredTasks?.length ? (
            <TasksDroppable
              tasks={filteredTasks}
              refreshTasks={() => {
                setFilteredTasks(TaskService.getTasksWithListId(subItem));
              }}
            />
          ) : (
            <s.NoTaskFound>
              <Image src={imageListNotFound} alt="Nenhuma tarefa encontrada" />
              <p>Nenhuma tarefa encontrada :( </p>
            </s.NoTaskFound>
          )}
        </div>
      </s.ListComponent>
    </>
  );
};

export default SubItem;
