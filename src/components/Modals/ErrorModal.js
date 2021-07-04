import React from 'react';
import Modal from 'react-modal';
import styles from './ErrorModal.module.css'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    padding: '1.25rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid rgb(255, 60, 60)',
    backgroundColor: 'rgb(255,228,225)',
  },
};

Modal.setAppElement(document.getElementById('root'));

export function ErrorModal(props) {
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
        <h2 className={styles.header}>Validation error!</h2>
        <p className={styles.paragraph}>{props.message}</p>
        <button className={styles.button} onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}