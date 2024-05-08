import Cta from "../cta/cta.component";
import TaskList from "../task-list/task_list.component";
import MainSectionContainer from "./main_section.styles";
import TaskType from "../../enums/task_type.enum";

const TASKS = [
  {
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
  {
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
  {
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
  {
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
];

const MainSection = () => (
  <MainSectionContainer>
    <h1>
      Transform Image <span className='purple'>To</span> Image
      <span className='second-part'>AI In Any Style</span>
    </h1>

    <p className='main-section-details'>
      Enter your image bellow and let AI image to image generator creates your
      dream. Easily create a new, altered version of your original image with
      the Image to Image feature in our online AI Generator. test by yourself
      for free and evaluate the impressive outcomes!
    </p>

    <Cta />

    <TaskList tasks={TASKS} />
  </MainSectionContainer>
);

export default MainSection;
