import { TaskModel } from '@/models/Task';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import CustomCard from '@/components/tasks/card/custom-card/CustomCard';
import * as s from './styled-tasks-droppable';
import { useEffect, useState } from 'react';
import RemoveModal from '../remove-modal/RemoveModal';
import { EditTaskModal } from '../tasks/EditTaskModal';
import { toast } from 'react-toastify';
import TaskService from '@/services/TasksService';

type TasksDroppableProps = {
  tasks: TaskModel[];
  refreshTasks?: () => void;
};

const TasksDroppable = ({
  tasks,
  refreshTasks
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
  const [taskToEdit, setTaskToEdit] = useState<TaskModel>();
  const [removeModal, setRemoveModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [taskIdToRemove, setTaskIdToRemove] = useState<number>();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const changedTasks = tasks.map((task) => {
      if (task.id.toString() === result.draggableId) {
        const status = result.destination?.droppableId as TaskModel['status'];
        return {
          ...task,
          status,
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

    TaskService.setTasks(tasksWithMovedTask);
    refreshTasks?.();
  };

  const handleRemove = () => {
    TaskService.removeTask(taskIdToRemove);
    refreshTasks?.();
    setRemoveModal(false);
    toast.success('Tarefa removida com sucesso!');
  };

  useEffect(() => {
    if (!editModal) {
      refreshTasks?.();
    }
  }, [editModal]);

  return (
    <>
      {taskToEdit && (
        <EditTaskModal
          open={editModal}
          setOpen={setEditModal}
          task={taskToEdit}
          setTaskToEdit={setTaskToEdit}
        />
      )}
      {removeModal && (
        <RemoveModal
          open={removeModal}
          setOpen={setRemoveModal}
          onClickConfirm={handleRemove}
        />
      )}
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
                                  onClick={() => {
                                    setTaskToEdit(task);
                                    setEditModal(true);
                                  }}
                                  index={index}
                                  task={task}
                                  remove={(id) => {
                                    setTaskIdToRemove(id);
                                    setRemoveModal(true);
                                  }}
                                  openEditModal={() => {
                                    setTaskToEdit(task);
                                    setEditModal(true);
                                  }}
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
    </>
  );
};

export default TasksDroppable;
