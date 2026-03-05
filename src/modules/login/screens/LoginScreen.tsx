import Button from '../../../shared/buttons/button/button';
import Input from '../../../shared/inputs/input/input';
import {
  BackGroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <>
      <BackGroundImage src="./dogBg.jpg" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="warning">
            Login
          </TitleLogin>
          <Input title="User" />
          <Input title="Password" />
          <Button type="primary" margin="32px 0px 16px 0px">
            Sign In
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </>
  );
};

export default LoginScreen;
