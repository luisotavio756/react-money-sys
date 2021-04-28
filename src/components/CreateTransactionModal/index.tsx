import React from 'react';
import Modal from '../Modal';
import { Container } from './styles';

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

      <input
        type="text"
        placeholder="Categoria"
      />

      <button type="submit">Cadastrar</button>
    </Container>
  </Modal>
);

export default CreateTransactionModal;
