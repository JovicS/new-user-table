import { createSlice } from '@reduxjs/toolkit';


export const slices = createSlice({
  name: 'users',
  initialState: {
    value: [{
        email: 'kkkk',
        password: 'lllll',
        id: 45254
    }],
  },
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state?.value?.push(action.payload)
    },
    removeUser: (state, action) => {
      return {value: [...state?.value?.filter((user)=>user?.id !== action?.payload?.id)]}
    },
    // editUser: (state, action) => {
    //   return {value: [...state.value?.find((user)=> user?.id === action.payload?.id)]}
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = slices.actions;
export const { removeUser } = slices.actions;

export default slices.reducer