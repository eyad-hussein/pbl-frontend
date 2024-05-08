import CtaContainer from "./cta.styles";
import pointerIcon from "../../assets/icons/pointer.png";

const Cta = () => (
  <CtaContainer>
    <img src={pointerIcon} alt='pointer' />
    <p className='cta-details'>Choose a specific task to do</p>
  </CtaContainer>
);

export default Cta;
