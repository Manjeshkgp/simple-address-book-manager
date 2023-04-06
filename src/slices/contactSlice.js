import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allContacts:[]
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateContact: (state,action) => {
        let indexToUpdate = state.allContacts.findIndex(obj => obj.Number === action.payload.oldObj.Number);
        state.allContacts[indexToUpdate] = action.payload.newObj;
    },
    deleteContact: (state,action) => {
      let indexToRemove = state.allContacts.findIndex(obj => obj.Number === action.payload.Number);
      if (indexToRemove !== -1) {
        state.allContacts.splice(indexToRemove, 1);
      }
    },
    addContact: (state, action) => {
      state.allContacts.push(action.payload);
    },
  },
})

export const { updateContact, deleteContact, addContact } = contactSlice.actions;

export default contactSlice.reducer;