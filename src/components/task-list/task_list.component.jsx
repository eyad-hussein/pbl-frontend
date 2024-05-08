import Task from "../task/task.component";
import TaskListContainer from "./task_list.styles";

const TaskList = ({ tasks }) => {
  return (
    <TaskListContainer>
      {tasks.length &&
        tasks.map((task) => <Task task={task} key={task["id"]} />)}
    </TaskListContainer>
  );
};

export default TaskList;
