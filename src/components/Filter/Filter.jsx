import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, getFilter } from '../../Redux/contactsSlice';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const { name } = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filter(event.target.value));
  };

  return (
    <Label>
      Find my contacts by name
      <Input type="text" name="filter" value={name} onChange={handleFilter} />
    </Label>
  );
}
