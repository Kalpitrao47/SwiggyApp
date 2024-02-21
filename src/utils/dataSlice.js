// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    getSwiggyData: (state, action) => {
      console.log("actions===", action.payload);
      state.data = action.payload;
    },
  },
});

export default DataSlice.reducer;

export const { getSwiggyData } = DataSlice.actions;
