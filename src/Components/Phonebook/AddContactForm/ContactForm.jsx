import { Form, Field } from 'formik';
//Utils
import { AlertMessage } from 'styles/AlertMessage';

const ContactForm = ({ errors, touched, children }) => {
  return (
    <Form>
      <label htmlFor="name">Name</label>
      <Field id="name" name="name" placeholder="Enter name" />

      {touched.name && errors.name && (
        <AlertMessage>{errors.name}</AlertMessage>
      )}
      <label htmlFor="tel">Phone</label>
      <Field id="tel" name="tel" placeholder="Enter phone number" />

      {touched.tel && errors.tel && (
        <AlertMessage style={{ left: '238px' }}>{errors.tel}</AlertMessage>
      )}
      <button type="submit">add</button>
      {children}
    </Form>
  );
};

export default ContactForm;
