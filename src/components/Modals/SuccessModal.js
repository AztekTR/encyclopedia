import React from 'react';
import Modal from 'react-modal';
import styles from './SuccessModal.module.css'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    padding: '1.25rem 2.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    alignItems: 'center',
    border: '2px solid rgb(60,183,120)',
    backgroundColor: 'rgb(245,255,250)',
  },
};

Modal.setAppElement(document.getElementById('root'));

export function SuccessModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    if(props.isOpen){  
      openModal();
    } 
  }, [props.isOpen])

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Error Modal"
      >
        <h2 className={styles.header}>Success!</h2>
        <button className={styles.button} onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}