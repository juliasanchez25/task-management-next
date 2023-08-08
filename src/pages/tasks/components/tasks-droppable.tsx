import { TaskModel } from '@/models/Task';

import { DragDropContext, DropResult, Droppable, ResponderProvided } from 'react-beautiful-dnd';
import { Card } from './card';

type TasksDroppableProps = {
  tasks: any[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

export const TasksDroppable = ({ tasks, setTasks }: TasksDroppableProps) => {
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) return;
    console.log(result);
    console.log(provided);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='todo'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>Todo</h2>
            {tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index}/>
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='doing'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>Doing</h2>
            <Card />
          </div>
        )}
      </Droppable>
      <Droppable droppableId='done'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>Done</h2>
            <Card />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};