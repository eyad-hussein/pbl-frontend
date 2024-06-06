import TaskExtended from "../../components/task-extended/task_extended.component";
import TaskRouteContainer from "./task_route.styles";
import TaskType from "../../enums/task_type.enum";
import { TASKS } from "../../enums/task_type.enum";
import { useParams } from "react-router-dom";

const TaskRoute = () => {
  const params = useParams();
  const { task } = params;
  let taskToBeRendered;

  switch (task) {
    case TaskType.ANIME:
      taskToBeRendered = TASKS[TaskType.ANIME];
      break;
    case TaskType.MONET:
      taskToBeRendered = TASKS[TaskType.MONET];
      break;
    case TaskType.YUKIYOE:
      taskToBeRendered = TASKS[TaskType.YUKIYOE];
      break;
    case TaskType.VANGOGH:
      taskToBeRendered = TASKS[TaskType.VANGOGH];
      break;
    default:
      throw "invalid task";
  }

  return (
    <TaskRouteContainer>
      <TaskExtended task={taskToBeRendered} />
    </TaskRouteContainer>
  );
};

export default TaskRoute;
