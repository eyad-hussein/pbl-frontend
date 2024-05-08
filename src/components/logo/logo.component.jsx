import LogoContainer from "./logo.styles";
import logo from "../../assets/logos/logo.png";

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt='logo' />
      <span>
        Pix<span className='number-two'>2</span>Fix
      </span>
    </LogoContainer>
  );
};

export default Logo;
