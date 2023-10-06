import { TaskModel } from '@/models/Task';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import CustomCard from '@/components/tasks/card/custom-card/CustomCard';
import * as s from './styled-tasks-droppable';

type TasksDroppableProps = {
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  openEditModal: (id: number) => void;
  remove: (
    id: number,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => void;
};

const TasksDroppable = ({
  tasks,
  setTasks,
  openEditModal,
  remove,
}: TasksDroppableProps) => {
  const status = [
    {
      id: 'todo',
      name: 'To Do',
    },
    {
      id: 'doing',
      name: 'Doing',
    },
    {
      id: 'done',
      name: 'Done',
    },
  ];

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const changedTasks = tasks.map((task) => {
      if (task.id.toString() === result.draggableId) {
        const status = result.destination?.droppableId as TaskModel['status'];
        return {
          ...task,
          status,
          finishedAt: status === 'done' ? new Date() : undefined,
        };
      }
      return task;
    });

    const movedTask = changedTasks.find(
      (task) => task.id.toString() === result.draggableId,
    ) ?? [];
    const tasksWithoutMovedTask = changedTasks.filter(
      (task) => task.id.toString() !== result.draggableId,
    );
    const tasksWithMovedTask = tasksWithoutMovedTask
      .slice(0, result.destination.index)
      .concat(movedTask)
      .concat(tasksWithoutMovedTask.slice(result.destination.index));

    setTasks(tasksWithMovedTask);
  };

  return (
    <s.DroppableTasks>
      <DragDropContext onDragEnd={onDragEnd}>
        {status.map((status, index) => (
          <s.DroppableTasksContainer key={index}>
            <s.Title>{status.name}</s.Title>
            <Droppable droppableId={status.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {tasks.map(
                    (task, index) =>
                      task.status === status.id && (
                        <Draggable
                          key={task.id}
                          draggableId={task.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <s.DraggableCard
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <CustomCard
                                onClick={() => openEditModal(task.id)}
                                index={index}
                                task={task}
                                remove={(id, event) => remove(id, event)}
                                openEditModal={openEditModal}
                              />
                            </s.DraggableCard>
                          )}
                        </Draggable>
                      ),
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </s.DroppableTasksContainer>
        ))}
      </DragDropContext>
    </s.DroppableTasks>
  );
};

export default TasksDroppable;
