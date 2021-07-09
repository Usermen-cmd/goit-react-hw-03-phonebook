import PropTypes from 'prop-types';
//Styles
import { InputContainer } from 'styles/InputContainer';

const FindContact = ({ children, addFindFilterValue }) => {
  return (
    <InputContainer>
      <h3>Find contact by name</h3>
      <input type="text" onChange={addFindFilterValue} />
      {children}
    </InputContainer>
  );
};

FindContact.propTypes = {
  addFindFilterValue: PropTypes.func.isRequired,
};

export default FindContact;
