import { Lng } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  lng: Lng;
}

const initialState: State = { lng: "en" };

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLng: (state, action: PayloadAction<Lng>) => {
      state.lng = action.payload;
    },
  },
});

export default slice.reducer;
