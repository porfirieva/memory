import { createSlice, nanoid } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAdmin: false,
    knowledges: [
      { theme: "тема 1", id: nanoid() },
      { theme: "тема 2", id: nanoid() },
      { theme: "тема 3", id: nanoid() },
    ],
  },
  reducers: {
    setIsAdmin: (state) => ({ ...state, isAdmin: true }),
    getKnowledges: () => {},
    getKnowledge: (state, action) => {},
    setKnowledge: (state, action) => ({
      ...state,
      knowledges: [
        ...state.knowledges,
        { theme: action.payload, id: nanoid() },
      ],
    }),
  },
});

export const selectIsAdmin = (state) => state.admin.isAdmin;
export const selectKnowledges = (state) => state.admin.knowledges;

export const { setIsAdmin, getKnowledges, getKnowledge, setKnowledge } =
  adminSlice.actions;

export default adminSlice.reducer;
