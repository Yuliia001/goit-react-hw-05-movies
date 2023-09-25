import React, { useState } from 'react';
import { ButtonSubmit, Form, Input } from './SearchBar.styled';

export const SearchBar = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        placeholder="Search for movies"
        onChange={evt => setQuery(evt.target.value)}
      />
      <ButtonSubmit type="submit">Search</ButtonSubmit>
    </Form>
  );
};
