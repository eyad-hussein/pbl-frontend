import SignButtonContainer from "./sign_button.styles";
import userIcon from "../../assets/icons/user.png";
import SignUp from "../sign-up/sign_up.component";
import SignIn from "../sign-in/sign_in.component";

const SignButton = () => (
  <SignButtonContainer>
    <img src={userIcon} alt='user' />
    <SignUp />
    <SignIn />
  </SignButtonContainer>
);

export default SignButton;
