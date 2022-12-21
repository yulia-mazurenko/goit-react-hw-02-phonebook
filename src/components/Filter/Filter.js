import PropTypes from 'prop-types';
import { Label, InputFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <InputFilter type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;

PropTypes.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
