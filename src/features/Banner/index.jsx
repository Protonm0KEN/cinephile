import React, {useEffect, useState} from 'react';
import {loadBanner} from "./BannerSlice";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import BannerItem from "./BannerItem";
const BannerWrapper = styled.div`
  position: relative;
  height: 100vh;
`
const Banner = () => {
    const dispatch = useDispatch()
    const {results} = useSelector(state => state.banner.list)
    const [slide, setSlide] = useState(0)
    const handleNextSlide = () => {
            if(results && results.length-1 === slide){
                setSlide(0)
            }else{
                setSlide(slide+1)
            }
    }
    useEffect(() => {
        dispatch(loadBanner())
    }, [])

    useEffect(() => {
        let  timeOut = setTimeout(handleNextSlide, 10000)
        return  () => {
            clearTimeout(timeOut)
        }
    }, [slide])
    return (
        <div>
            <BannerWrapper>
                {results && results.map((item, index) => (
                    slide === index ? <BannerItem handleNextSlide = {handleNextSlide} nextFilm = {results[index+1 === results.length ? 0 : index+1]} movie = {item} key = {index} /> : null
                ))}
            </BannerWrapper>
        </div>
    );
};

export default Banner;