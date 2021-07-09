import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { Button } from 'styles/deleteBtn';

const stylesIcon = {
  width: '20px',
  height: '20px',
};

const ContactItems = ({ contacts, onDeleteClick, noContactsMessage }) => {
  return (
    <>
      {contacts.length
        ? contacts.map(el => {
            return (
              <li key={el.id}>
                {el.name} : {el.tel}
                <Button
                  type="button"
                  data-id={el.id}
                  onClick={onDeleteClick}
                  aria-label="delete contact"
                >
                  <AiFillDelete style={stylesIcon} />
                </Button>
              </li>
            );
          })
        : noContactsMessage}
    </>
  );
};

ContactItems.defaultProps = {
  noContactsMessage: 'телефонная книга пуста!',
};

ContactItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    }),
  ),
  onDeleteClick: PropTypes.func.isRequired,
  noContactsMessage: PropTypes.string,
};

export default ContactItems;
