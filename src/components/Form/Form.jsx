import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormStyled, Button, Label, Input } from './Form.styled';
import uniqid from 'uniqid';

import { add } from 'redux/contacts/contactsSlice';
import { MdPersonAddAlt1 } from 'react-icons/md';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // localStorage.setItem('contacts', JSON.stringify(this.state))

    const newContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newContact) {
      return alert(`${name} is alredy in contacts`);
      //    localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    dispatch(add({ name, number, id: uniqid() }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          placeholder="Ivan Ivanenko"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        <span>Number</span>
        <Input
          type="tel"
          name="number"
          placeholder="050 123 45 67"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </Label>
      <Button type="submit">
        {' '}
        Add contact <MdPersonAddAlt1 />
      </Button>
    </FormStyled>
  );
};
