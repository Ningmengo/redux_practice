import { createSlice } from "@reduxjs/toolkit";

// CreateSlice is a function that accepts an initial state, an object of reducer functions,
// and a "slice name", and automatically generates action creators and action
//  types that correspond to the reducers and state. This API is the standard
//   approach for writing Redux logic.

//contains name of the slice, initialState and functions inside reducers
export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    //initial state here equals to "value: { name: "", age: 0, email: "" }""
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});
// export reducer inside the slice
export default userSlice.reducer;
