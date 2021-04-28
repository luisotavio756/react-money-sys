import React, { useEffect } from 'react';
import api from '../../services/api';
import { Container } from './styles';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get<ITransaction[]>('/transactions').then((response) => console.log(response.data));
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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/04/21</td>
          </tr>
          <tr>
            <td>Alugel </td>
            <td className="withdraw">-R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/04/21</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/04/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
