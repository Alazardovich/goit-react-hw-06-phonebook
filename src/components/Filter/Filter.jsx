// import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FilterContainer } from "./CSSFilter";
import { changeFilter } from "../../redux/contacts/contactsSlice";

const Filter = () => {
  const filterId = nanoid();
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  // const { filter, onChange } = this.props;
  return (
    <FilterContainer>
      <label htmlFor={filterId}>
        Find contacts by name
        <input
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          type="text"
          value={filter}
          id={filterId}
        />
      </label>
    </FilterContainer>
  );
};

Filter.defaultProps = {
  filter: "",
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};
export default Filter;
