import React, {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import ITransaction from '../dtos/ITransaction';
import api from '../services/api';

type ICreateTransaction = Omit<ITransaction, 'id' | 'createdAt'>;
interface ITransactionContextData {
  transactions: ITransaction[];
  createTransaction(data: ICreateTransaction): void;
}

const TransactionsContext = createContext({} as ITransactionContextData);

const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const createTransaction = useCallback(async ({
    type, title, amount, category,
  }: ICreateTransaction) => {
    const data = {
      type,
      title,
      amount,
      category,
    };

    const response = await api.post('/transactions', data);

    const { transaction } = response.data;

    setTransactions((oldState) => [...oldState, transaction]);
  }, []);

  useEffect(() => {
    api.get('/transactions').then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

function useTransactions(): ITransactionContextData {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error('useTransactions must be use within TransactionsProvider');
  }

  return context;
}

export {
  TransactionsProvider,
  useTransactions,
};
