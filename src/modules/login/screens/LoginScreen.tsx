import Input from '../../../shared/inputs/input/input';
import {
  BackGroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <>
      <BackGroundImage src="./dogBg.jpg" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input title="User" />
          <Input title="Password" />
        </LimitedContainer>
      </ContainerLogin>
    </>
  );
};

export default LoginScreen;
