// import React, { Component } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/Item";

import { ListContainer } from "./CSSContactList";

const ContactList = () => {
  const items = useSelector((state) => state.contacts.items);
  // const dispatch = useDispatch();
  return (
    <ListContainer>
      {items.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ListContainer>
  );
};

ContactList.propTypes = {
  onHandleFilter: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  // onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
