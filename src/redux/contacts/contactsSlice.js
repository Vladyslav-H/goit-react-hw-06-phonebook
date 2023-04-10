import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    },
  },
});
export const { add, remove } = contactsSlice.actions;
export default contactsSlice.reducer;
