import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const filterVisible = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!contacts) return;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterVisible();
  return (
    <ul>
      {!contacts.length ? (
        <h3>You don't have any contacts yet</h3>
      ) : !filteredContacts.length ? (
        <h3>No matches found</h3>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
          ></ContactItem>
        ))
      )}
    </ul>
  );
};

export default ContactList;
