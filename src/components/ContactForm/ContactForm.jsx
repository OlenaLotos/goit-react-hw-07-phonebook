import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from '../../Redux/ContactsApi';
import { Form, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactsMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in your contacts list`);
    }

    addContact({ name: name, number: number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="Enter name"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        placeholder="Enter number"
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit" disabled={isLoading}>
        Add new contact
      </Button>
    </Form>
  );
}
