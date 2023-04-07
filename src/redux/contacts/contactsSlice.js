import { createSlice } from '@reduxjs/toolkit';

const Is = [ ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: Is,
  reducers: {
    add(state, { payload }) {
      return [...state, payload];
    },
    remove(state, { payload }) {
      return state.filter(el => el.id !== payload);
    },
  },
});
export const { add, remove } = contactsSlice.actions;
export default contactsSlice.reducer;
