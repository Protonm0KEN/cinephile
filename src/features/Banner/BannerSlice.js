import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_THE_DB} from "../../config";
const initialState = {
    loading: true,
    list: [],
    error: null
}
export const loadBanner = createAsyncThunk(
    "@@banner/loadBanner",
    async (_, {dispatch}, ) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_THE_DB}&language=ru-RU&page=1`)
        const {data} = res
        dispatch(addBannerItem(data))
    }
)
export const bannerSlice = createSlice({
    name: "@@banner",
    initialState: initialState,
    reducers: {
        addBannerItem: (state, action) => {
            state.list = action.payload
        },
    },
})
const {addBannerItem} = bannerSlice.actions
export const bannerReducer = bannerSlice.reducer