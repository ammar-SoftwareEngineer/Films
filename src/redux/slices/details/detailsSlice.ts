import { createSlice } from "@reduxjs/toolkit";
import getDetails from "./getDetails";


interface DetailsState {
    records: {
        id: number;
        url: string;
        thumbnailUrl: string;
    }[];
    loading: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}
const initialState: DetailsState = {
    records: [],
    loading: 'idle',
    error: null,
};
const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getDetails.pending, (state) => {
            state.loading = 'loading';
            state.error = null;
        }).addCase(getDetails.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.records = action.payload;
        }).addCase(getDetails.rejected, (state, action) => {
            state.loading = 'failed';
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload
            }
        });
    }
})

export default detailsSlice.reducer;
export type { DetailsState };