import React, { useMemo } from 'react';
import { Container, Item } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/transactions.hook';

const Summary: React.FC = () => {
  const { summary } = useTransactions();

  const { deposits, total, withdraws } = useMemo(() => summary, [summary]);

  return (
    <Container>
      <Item>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          R$
          {' '}
          {deposits}
        </strong>
      </Item>
      <Item>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          - R$
          {' '}
          {withdraws}
        </strong>
      </Item>
      <Item className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          R$
          {' '}
          {total}
        </strong>
      </Item>
    </Container>
  );
};

export default Summary;
