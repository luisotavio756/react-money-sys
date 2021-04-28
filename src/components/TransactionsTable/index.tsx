import React, { useEffect } from 'react';
import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions').then((response) => response.json()).then((data) => console.log(data));
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
