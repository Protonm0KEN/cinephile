import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_THE_DB} from "../../../config";
const initialState = {
    list: []
}
export const loadPopularMovies = createAsyncThunk(
    "@@popularMovies/loadPopularMovies",
    async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_THE_DB}&language=ru-RU&page=1`)
        const {data} = res
        return data
    }
)
const PopularMoviesSlice = createSlice({
    name: "@@popularMovies",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(loadPopularMovies.fulfilled, (state, action) => {
            state.list = action.payload
        })
    }
})
