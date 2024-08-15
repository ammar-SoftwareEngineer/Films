import axios from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';
export const getFilms = createAsyncThunk('films/getFilms', async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message)
        } else {
            return rejectWithValue("")
        }
    }
  })

export default getFilms;