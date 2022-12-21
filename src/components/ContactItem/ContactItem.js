import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';
import { ListItem, Wrapper, DeleteButton, Text } from './ContactItem.styled';

const ContactItem = ({ contactName, number, id, onDeleteContact }) => {
  return (
    <ListItem>
      <Wrapper>
        <IoMdContact />

        <Text>{contactName}:</Text>
        <Text>{number}</Text>
      </Wrapper>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        <AiFillDelete width="20px" height="20px" />
      </DeleteButton>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
