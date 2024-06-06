import Cta from "../cta/cta.component";
import TaskList from "../task-list/task_list.component";
import MainSectionContainer from "./main_section.styles";
import { TASKS } from "../../enums/task_type.enum";

const TASKS_LIST = Object.values(TASKS);

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

    <TaskList tasks={TASKS_LIST} />
  </MainSectionContainer>
);

export default MainSection;
