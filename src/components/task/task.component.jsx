import TaskContainer from "./task.styles";
import arrowIcon from "../../assets/icons/right-arrow.png";

const Task = ({ task }) => {
  const { images, title, content, to } = task;
  const { oldImage, newImage } = images;

  return (
    <TaskContainer to={to}>
      <div className='images'>
        <img className='images images__image' src={oldImage} alt='old image' />
        <img className='arrow' src={arrowIcon} alt='arrow' />
        <img className='images images__image' src={newImage} alt='old image' />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </TaskContainer>
  );
};

export default Task;
