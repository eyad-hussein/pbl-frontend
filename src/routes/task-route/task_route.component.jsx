import TaskExtended from "../../components/task-extended/task_extended.component";
import TaskRouteContainer from "./task_route.styles";
import TaskType from "../../enums/task_type.enum";

import { useParams } from "react-router-dom";

const TASKS = {
  [TaskType.COLORING]: {
    id: 1,
    images: {
      oldImage: require("../../assets/images/coloring-image1-small.png"),
      newImage: require("../../assets/images/coloring-image2-small.png"),
    },
    title: "Coloring Image",
    content:
      "Convert any black and white image to a new colorized image to be used in modern life with just one click.",
    to: TaskType.COLORING,
  },
  [TaskType.ENHANCEMENT]: {
    id: 2,
    images: {
      oldImage: require("../../assets/images/enhancing-image1-small.png"),
      newImage: require("../../assets/images/enhancing-image2-small.png"),
    },
    title: "Regenerate Image",
    content:
      "Let the Artificial intelligence regenerate your image so you can use in different ways and perspectives.",
    to: TaskType.ENHANCEMENT,
  },
  [TaskType.REGENERATION]: {
    id: 3,
    images: {
      oldImage: require("../../assets/images/regenrate-image1-small.png"),
      newImage: require("../../assets/images/regenrate-image2-small.png"),
    },
    title: "Enhancing Image",
    content:
      "Let the Artificial intelligence regenerate your image so you can use in different ways and perspectives.",
    to: TaskType.REGENERATION,
  },
  [TaskType.SKETCH]: {
    id: 4,
    images: {
      oldImage: require("../../assets/images/sketch-image1-small.png"),
      newImage: require("../../assets/images/sketch-image2-small.png"),
    },
    title: "Sketch to image",
    content:
      "Let the Artificial intelligence regenerate your image so you can use in different ways and perspectives.",
    to: TaskType.SKETCH,
  },
};

const TaskRoute = () => {
  const params = useParams();
  const { task } = params;
  let taskToBeRendered;

  switch (task) {
    case TaskType.COLORING:
      taskToBeRendered = TASKS[TaskType.COLORING];
      break;
    case TaskType.ENHANCEMENT:
      taskToBeRendered = TASKS[TaskType.ENHANCEMENT];
      break;
    case TaskType.REGENERATION:
      taskToBeRendered = TASKS[TaskType.REGENERATION];
      break;
    case TaskType.SKETCH:
      taskToBeRendered = TASKS[TaskType.SKETCH];
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
