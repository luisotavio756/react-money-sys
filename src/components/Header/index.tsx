import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface IHeaderProps {
  handleOpenNewTransactionModal(): void;
}

const Header: React.FC<IHeaderProps> = ({ handleOpenNewTransactionModal }) => (
  <Container>
    <Content>
      <img src={Logo} alt="dt money" />
      <button type="button" onClick={handleOpenNewTransactionModal}>Nova transação</button>
    </Content>
  </Container>
);

export default Header;
