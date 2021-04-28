import React from 'react';
import Modal from '../Modal';
import { Container, TransactionTypeContainer } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface ICreateTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleCloseNewTransactionModal(): void;
}

const CreateTransactionModal: React.FC<ICreateTransactionModalProps> = ({
  handleCloseNewTransactionModal,
  isNewTransactionModalOpen,
}) => (
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
        <button type="button">
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </button>
        <button type="button">
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </button>
      </TransactionTypeContainer>

      <input
        type="text"
        placeholder="Categoria"
      />

      <button type="submit">Cadastrar</button>
    </Container>
  </Modal>
);

export default CreateTransactionModal;
