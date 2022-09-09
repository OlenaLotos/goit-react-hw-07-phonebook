import React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../Redux/сontactsApi';
import { getFilter } from '../../Redux/contactsSlice';
import { ContactItem } from '../../components/ContactItem/ContactItem';
import { ListUl } from './ContactList.styled';

export default function ContactList() {
  const { data: contacts, isSuccess } = useGetContactsQuery();

  const filterContacts = useSelector(getFilter);

  if (!isSuccess) {
    return;
  }

  const getContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLocaleLowerCase())
  );

  return (
    <ListUl>
      {getContacts.map(({ id, name, phone, avatar }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={phone}
          avatar={avatar}
        />
      ))}
    </ListUl>
  );
}
