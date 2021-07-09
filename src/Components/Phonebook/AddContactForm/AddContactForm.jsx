import { Component } from 'react';
import PropTypes from 'prop-types';
//Utils
import DisplayingErrorMessagesSchema from 'utils/validationInput';
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
//Components
import { AiFillPlusCircle, AiOutlineClose } from 'react-icons/ai';
import ContactForm from 'Components/Phonebook/AddContactForm/ContactForm';

const stylesIcons = {
  width: '30px',
  height: '30px',
};

class AddContactForm extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
  };
  state = {
    toggleButton: false,
  };

  toggleForm = () => {
    this.setState(prevState => ({ toggleButton: !prevState.toggleButton }));
  };

  onSubmitForm = (event, actions) => {
    const id = uuidv4();
    this.props.submit({ ...event, id });
    actions.resetForm();
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.toggleForm}>
          {this.state.toggleButton ? (
            <AiOutlineClose style={stylesIcons} />
          ) : (
            <AiFillPlusCircle style={stylesIcons} />
          )}
        </button>
        {this.state.toggleButton && (
          <Formik
            initialValues={{
              name: '',
              tel: '',
            }}
            onSubmit={this.onSubmitForm}
            validationSchema={DisplayingErrorMessagesSchema}
          >
            {({ errors, touched }) => (
              <ContactForm errors={errors} touched={touched}>
                {this.state.toggleButton && this.props.children}
              </ContactForm>
            )}
          </Formik>
        )}
      </>
    );
  }
}
export default AddContactForm;
