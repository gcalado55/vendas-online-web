import { useState } from 'react';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`username: ${username}, password: ${password}`);
  };
  return (
    <>
      <BackGroundImage src="./dogBg.jpg" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="warning">
            Login
          </TitleLogin>
          <Input title="User" margin="32px 0px 0px" onChange={handleUsername} value={username} />
          <Input
            type="Password"
            title="Password"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button type="primary" margin="32px 0px 16px 0px" onClick={handleLogin}>
            Sign In
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </>
  );
};

export default LoginScreen;
