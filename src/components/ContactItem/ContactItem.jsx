import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { ContactItemStyled } from 'components/ContactItem/ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <ContactItemStyled>
      {name}: {number}
      <button type="button" onClick={open}>
        Delete
      </button>
      {isOpen && <Modal onClose={close}  name={name} id={id} />}
    </ContactItemStyled>
  );
};

export default ContactItem;
