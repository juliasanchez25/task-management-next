import React, { useState } from 'react';
import { TasksDroppable } from './components/tasks-droppable';
import { TaskModel } from '@/models/Task';

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  return (
    <div>
      <h1>Tasks</h1>
      <TasksDroppable tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Tasks;