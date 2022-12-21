import PropTypes from 'prop-types';

const ContactItem = ({ contactName, number, id, onDeleteContact }) => {
  return (
    <li>
      {contactName}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
