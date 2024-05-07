import { createSlice } from '@reduxjs/toolkit';

export const mainSearchSlice = createSlice({
    name: 'mainSearch',
    initialState: {
        searchTerm: "",
    },
    reducers: {
            setTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { setTerm } = mainSearchSlice.actions;

export default mainSearchSlice.reducer;
