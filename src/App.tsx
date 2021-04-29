import { useState } from 'react';
import CreateTransactionModal from './components/CreateTransactionModal';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { TransactionsProvider } from './hooks/transactions.hook';
import { GlobalStyle } from './styles/global';

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <CreateTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        handleCloseNewTransactionModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
