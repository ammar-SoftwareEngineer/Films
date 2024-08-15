import { createSlice } from "@reduxjs/toolkit";
import getFilms from "./getFilms";


interface FilmState {
    records: {
        userId: number;
        id: number;
        title: string;
        body: string;
    }[];
    loading: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}
const initialState: FilmState = {
    records: [],
    loading: 'idle',
    error: null,
};
const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getFilms.pending, (state) => {
            state.loading = 'loading';
            state.error = null;
        }).addCase(getFilms.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.records = action.payload;
        }).addCase(getFilms.rejected, (state, action) => {
            state.loading = 'failed';
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload
            }
        });
    }
})

export default filmSlice.reducer;
export type { FilmState };