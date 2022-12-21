import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import FormError from './FormError';
import { FormStyle, Label, Button, Input } from './ContactForm.styled';

//----------with Formik-------------------------------------
const schema = yup.object().shape({
  name: yup.string().required('Please, enter correct name'),
  number: yup
    .number()
    .required('Please, check the correctness of phone number')
    .positive()
    .integer(),
});

const initialValues = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  contactId = nanoid();
  contactNameId = nanoid();
  contactNumberIid = nanoid();

  handleFormSubmit = (values, { resetForm }) => {
    this.props.onSubmitForm(values);

    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleFormSubmit}
      >
        <FormStyle>
          <Label htmlFor={this.contactId}>
            Name
            <Input
              placeholder="Jhon Snow"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id={this.contactId}
              required
            />
            <FormError name="name" />
            {/* <ErrorMessage component={Custom} name="email" /> */}
          </Label>
          <Label htmlFor={this.contactNumberIid}>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={this.contactNumberIid}
              required
            />
            <FormError name="number" />
          </Label>
          <Button type="submit" onClick={this.props.onAddContact}>
            Add contact
          </Button>
        </FormStyle>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

//----------------------------------------------------------

//--------------Custom form----------------------------------
// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   contactId = nanoid();
//   contactNameId = nanoid();
//   contactNumberIid = nanoid();

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleFormSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmitForm(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: ' ', number: ' ' });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleFormSubmit}>
//           <label htmlFor={this.contactId}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               id={this.contactId}
//               required
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label htmlFor={this.contactNumberIid}>
//             Number
//             <input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               id={this.contactNumberIid}
//               required
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <button type="submit" onClick={this.props.onAddContact}>
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }

//--------------------------------------------------------
