import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
  name: "devices",
  initialState: {
    value: {
      devices: [
        // {
        //   mName: "",
        //   skuDisplayName: "",
        //   mBrand: "",
        //   mPrice: 100.0,
        //   mId: "",
        //   mMobileImageUrl: "",
        //   mCategoriesDisplayName: [],
        //   mCQDescription: "",
        //   mDescription: "",
        // },
      ],
    },
  },
  reducers: {
    storeDevices: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { storeDevices } = deviceSlice.actions;

export default deviceSlice.reducer;
