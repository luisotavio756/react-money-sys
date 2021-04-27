import React from 'react';
import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money"/>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}

export default Header;
