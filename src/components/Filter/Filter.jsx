import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyle } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterStyle.FilterSubtitle>
      Find contacts by name
      <FilterStyle.FilterInput
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </FilterStyle.FilterSubtitle>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
