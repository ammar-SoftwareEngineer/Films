import axios from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';
export const getUsers = createAsyncThunk('films/getUsers', async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message)
        } else {
            return rejectWithValue("")
        }
    }
  })

export default getUsers;