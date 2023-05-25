import React from 'react';
import PropTypes from 'prop-types';
import { ContactItemStyle } from './ContactListItem.styled';

const ContactListItem = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <ContactItemStyle.Item>
      {contact.name}
      <ContactItemStyle.Button onClick={handleDelete}>
        Delete
      </ContactItemStyle.Button>
    </ContactItemStyle.Item>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactListItem;
