import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import {
  ContactItemStyled,
  ButtonDel,
} from 'components/ContactItem/ContactItem.styled';
import { MdPersonRemoveAlt1 } from 'react-icons/md';

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
      <ButtonDel type="button" onClick={open}>
        Remove{' '}
        <MdPersonRemoveAlt1
          style={{
            display: 'block',
            width: '20px',
            height: '20px',
          }}
        />
      </ButtonDel>
      {isOpen && <Modal onClose={close} name={name} id={id} />}
    </ContactItemStyled>
  );
};

export default ContactItem;
