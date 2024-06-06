const TaskType = {
  ANIME: "anime",
  MONET: "monet",
  YUKIYOE: "yukiyoe",
  VANGOGH: "vangogh",
};

export const TASKS = {
  [TaskType.ANIME]: {
    id: 1,
    images: {
      oldImage: require("../assets/images/anime-image1-small.png"),
      newImage: require("../assets/images/anime-image2-small.png"),
    },
    title: "Coloring Anime",
    content:
      "Convert any black and white anime image to a new colorized image with just one click.",
    to: TaskType.ANIME,
  },
  [TaskType.MONET]: {
    id: 2,
    images: {
      oldImage: require("../assets/images/monet-image1-small.jpeg"),
      newImage: require("../assets/images/monet-image2-small.png"),
    },
    title: "Convert to Monet",
    content: "Convert any image to Monet style with just one click.",
    to: TaskType.MONET,
  },
  [TaskType.YUKIYOE]: {
    id: 3,
    images: {
      oldImage: require("../assets/images/yukiyoe-image1-small.jpeg"),
      newImage: require("../assets/images/yukiyoe-image2-small.png"),
    },
    title: "Convert to Yukiyoe",
    content: "Convert any image to Yukiyoe style with just one click.",
    to: TaskType.YUKIYOE,
  },
  [TaskType.VANGOGH]: {
    id: 4,
    images: {
      oldImage: require("../assets/images/vangogh-image1-small.jpeg"),
      newImage: require("../assets/images/vangogh-image2-small.png"),
    },
    title: "Convert to Van Gogh",
    content: "Convert any image to Van Gogh style with just one click.",
    to: TaskType.VANGOGH,
  },
};

export default TaskType;
