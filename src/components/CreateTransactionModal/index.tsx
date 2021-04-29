import React, { FormEvent, useCallback, useState } from 'react';
import Modal from '../Modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import api from '../../services/api';
import { useTransactions } from '../../hooks/transactions.hook';

interface ICreateTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleCloseNewTransactionModal(): void;
}

const CreateTransactionModal: React.FC<ICreateTransactionModalProps> = ({
  handleCloseNewTransactionModal,
  isNewTransactionModalOpen,
}) => {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const { createTransaction } = useTransactions();

  const handleCreateNewTransaction = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      type,
      title,
      amount,
      category,
    };

    try {
      await createTransaction(data);

      handleCloseNewTransactionModal();

      setType('deposit');
      setTitle('');
      setAmount(0);
      setCategory('');
    } catch (error) {
      alert('Insertion error');
    }
  }, [type, title, amount, category, createTransaction, handleCloseNewTransactionModal]);

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      title="Cadastrar transação"
      setIsOpen={handleCloseNewTransactionModal}
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default CreateTransactionModal;
