import { configureStore } from "@reduxjs/toolkit";
import memorySlice from "./Slices/memorySlice";

export default configureStore({
  reducer: {
    memory: memorySlice,
  },
});
