import { TaskModel } from '@/models/Task';

import { DragDropContext, Draggable, DropResult, Droppable, ResponderProvided } from 'react-beautiful-dnd';
import { CustomCard } from './card';

type TasksDroppableProps = {
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  openEditModal: (id: number) => void;
  remove: (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const TasksDroppable = ({ tasks, setTasks, openEditModal, remove }: TasksDroppableProps) => {
  const status = [
    {
      id: 'todo',
      name: 'A fazer'
    },
    {
      id: 'doing',
      name: 'Fazendo'
    },
    {
      id: 'done',
      name: 'Pronto'
    }
  ];

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const changedTasks = tasks.map((task) => {
      if (task.id.toString() === result.draggableId) {
        return { ...task, status: result.destination?.droppableId as TaskModel['status'] };
      }
      return task;
    });
    setTasks(changedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {status.map((status) => (
        <>
          <h1>{status.name}</h1>
          <Droppable droppableId={status.id}>
            {(provided) => (
              <>
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {provided.placeholder}
                </div>
                {tasks.map((task, index) => (
                  task.status === status.id && (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <CustomCard
                            onClick={() => openEditModal(task.id)}
                            index={index}
                            task={task}
                            remove={(id, event) => remove(id, event)}
                          />
                        </div>
                      )}
                    </Draggable>
                  )
                ))}
              </>
            )}
          </Droppable>
        </>
      ))}
    </DragDropContext>
  );
};