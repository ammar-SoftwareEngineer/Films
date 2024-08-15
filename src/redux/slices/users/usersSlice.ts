import { createSlice } from "@reduxjs/toolkit";
import getUsers from "./getUsers";


interface UsersState {
    records: {
        id: number;
        name: string;
        username: string;
    }[];
    loading: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}
const initialState: UsersState = {
    records: [],
    loading: 'idle',
    error: null,
};
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = 'loading';
            state.error = null;
        }).addCase(getUsers.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.records = action.payload;
        }).addCase(getUsers.rejected, (state, action) => {
            state.loading = 'failed';
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload
            }
        });
    }
})

export default usersSlice.reducer;
export type { UsersState };