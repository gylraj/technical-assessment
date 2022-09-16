import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./features/device";

const store = configureStore({ reducer: { devices: deviceReducer } });

export default store;
