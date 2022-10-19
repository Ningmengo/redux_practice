import { createSlice } from "@reduxjs/toolkit";

// CreateSlice is a function that accepts an initial state, an object of reducer functions,
// and a "slice name", and automatically generates action creators and action
//  types that correspond to the reducers and state. This API is the standard
//   approach for writing Redux logic.
const initialStateValue = "theme ";
//contains name of the slice, initialState and functions inside reducers
export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    //initial state here equals to "value: { name: "", age: 0, email: "" }""
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
// export reducer inside the slice
export default themeSlice.reducer;

export const { changeColor } = themeSlice.actions;
