import axios from 'axios';
import React, { useState } from 'react';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email,
        password,
      },
    })
      .then((result) => {
        alert(`Fez login`);
        return result.data;
      })
      .catch(() => {
        alert('Usuário ou senha Inválido');
      });
    console.log('returnObject', returnObject);
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
          <Input title="User" margin="32px 0px 0px" onChange={handleEmail} value={email} />
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
