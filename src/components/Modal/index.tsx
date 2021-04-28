import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { CloseContainer } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  title: string;
}

ReactModal.setAppElement('#root');

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  title,
  setIsOpen,
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#312e38',
          color: '#000000',
          borderRadius: '8px',
          maxWidth: '736px',
          width: '100%',
          border: 'none',
          height: '600px',
          overflowY: 'auto',
        },
        overlay: {
          backgroundColor: '#23212973',
        },
      }}
    >
      <CloseContainer>
        <h1>{title}</h1>
        <button type="button" onClick={() => setIsOpen()}>
          <FiX />
        </button>
      </CloseContainer>
      {children}
    </ReactModal>
  );
};

export default Modal;
