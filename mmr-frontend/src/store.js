import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./Slices/adminSlice";
import knowledgeSlice from "./Slices/knowledgeSlice";

export default configureStore({
  reducer: {
    memory: knowledgeSlice,
    admin: adminSlice,
  },
});
