import React from 'react';
import ContactListItem from 'components/List/ContactListItem';
import PropTypes from 'prop-types';
import { ContactListStyle } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = id => {
    onDelete(id);
  };

  return (
    <ContactListStyle.ListStyle>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </ContactListStyle.ListStyle>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
