import React, { useState } from 'react';
import Modal from '../Modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface ICreateTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleCloseNewTransactionModal(): void;
}

const CreateTransactionModal: React.FC<ICreateTransactionModalProps> = ({
  handleCloseNewTransactionModal,
  isNewTransactionModalOpen,
}) => {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      title="Cadastrar transação"
      setIsOpen={handleCloseNewTransactionModal}
    >
      <Container>
        <input
          type="text"
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
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
            onClick={() => setType('outdraw')}
            isActive={type === 'outdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default CreateTransactionModal;
