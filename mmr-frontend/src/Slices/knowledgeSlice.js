import { createSlice } from "@reduxjs/toolkit";

export const knowledgeSlice = createSlice({
  name: "memory",
  initialState: {
    theme: "",
  },
  reducers: {
    setTheme: (state, action) => ({ ...state, theme: action.payload }),
  },
});

export const selectTheme = (state) => state.memory.theme;
// export const selectKeyWords = (state) => state.memory.keyWords;
// export const selectMemory = (state) => state.memory;

export const { setTheme, setKeyWords, setDifinition, setAssociations } =
  knowledgeSlice.actions;

export default knowledgeSlice.reducer;

// setKeyWords: (state, action) => ({
//   ...state,
//   keyWords: {
//     ...state.keyWords,
//     [action.payload[0]]: { word: action.payload[1] },
//   },
// }),
// setAssociations: (state, action) => ({
//   ...state,
//   keyWords: {
//     ...state.keyWords,
//     [action.payload[0]]: {
//       ...state.keyWords[action.payload[0]],
//       associations: action.payload[1],
//     },
//   },
// }),
// setDifinition: (state, action) => ({
//   ...state,
//   keyWords: {
//     ...state.keyWords,
//     [action.payload[0]]: {
//       ...state.keyWords[action.payload[0]],
//       difinition: action.payload[1],
//     },
//   },
// }),
// },
