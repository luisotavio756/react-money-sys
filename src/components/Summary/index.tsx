import React from 'react';
import { Container, Item } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

const Summary: React.FC = () => {
  return (
    <Container>
      <Item>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </Item>
      <Item>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </Item>
      <Item className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 5000,00</strong>
      </Item>
    </Container>
  );
}

export default Summary;
