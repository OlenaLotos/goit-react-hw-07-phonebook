import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactsMutation } from '../../Redux/сontactsApi';
import { ItemLi, Button, Link, Img } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, avatar }) => {
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();

  console.log(avatar);
  const onDeleteContact = id => {
    deleteContact(id);
  };
  return (
    <ItemLi>
      <Link href="tel:{number}">
        <Img src={avatar} alt="avatar" width={35}></Img>
        {name}: {number}
      </Link>
      <Button
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </ItemLi>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
