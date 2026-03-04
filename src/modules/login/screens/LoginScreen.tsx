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
        </LimitedContainer>
      </ContainerLogin>
    </>
  );
};

export default LoginScreen;
