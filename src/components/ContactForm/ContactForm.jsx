import { Form, FormGroup, FormInput, AddBtn } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;

    if (
      items?.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is allready in contacts`);
      return;
    }
    const newContact = {
      name: name,
      phone: phone,
    };
    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        Name
        <FormInput
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormGroup>
      <FormGroup>
        {' '}
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormGroup>
      <AddBtn type="submit">Add</AddBtn>
    </Form>
  );
};

export default ContactForm;
