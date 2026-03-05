import { Space, Typography } from 'antd';
import styled from 'styled-components';

const { Text, Title } = Typography;

export const BackGroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
`;

export const TitleLogin = styled(Title)`
  color: orange;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 100%;
  max-width: 646px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const LimitedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 498px;
  flex-direction: column;
`;
