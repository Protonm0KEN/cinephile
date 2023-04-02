import {configureStore} from "@reduxjs/toolkit";
import {bannerReducer} from "../features/Banner/BannerSlice";
const store = configureStore({
    reducer:{
        banner: bannerReducer,

    },
    devTools: true,
})
export default store