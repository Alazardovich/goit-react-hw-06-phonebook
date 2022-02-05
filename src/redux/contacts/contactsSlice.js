import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addContact: (state, action) => {
      return { ...state, items: [action.payload, ...state.items] };
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    changeFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});
export default contactsSlice.reducer;
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
