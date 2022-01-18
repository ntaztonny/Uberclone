import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrign: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrign, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.Destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

//export default navReducer = navSlice.reducer;
export default navSlice.reducer;
