import React, { useEffect, useState } from 'react';
import ITransaction from '../../dtos/ITransaction';
import api from '../../services/api';
import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className={item.type}>
                {item.type === 'withdraw' && '- '}
                R$
                {` ${item.amount}`}
              </td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.amount)}

              </td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(item.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
