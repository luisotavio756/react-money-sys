import React from 'react';
import Modal from '../Modal';

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
    <h2>Cadastrar transação</h2>
  </Modal>
);

export default CreateTransactionModal;
