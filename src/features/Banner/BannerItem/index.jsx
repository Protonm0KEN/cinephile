import React from 'react';
import styled, {keyframes} from "styled-components";
import {Button} from "../../../UI/Button";
import lines from "../../../assets/images/lines.svg"
import bg from "../../../assets/images/bg-png.png"
import {img_original} from "../../../config";
const BannerItemWrapper = styled.div`
  height: 100%;
    
`
const Img = styled.img`
  position: absolute;
    width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  object-fit: cover;
  z-index: -99;
`
const BannerItemContent = styled.div`
  background: rgba(20, 20, 20, 0.76);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const BannerItemInfo = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`
const BannerItemTitle = styled.h2`
  font-size: 80px;
  line-height: 94px;
  color: #FFFFFF;
  font-family: "RalewayBold";
`
const BannerItemDescription = styled.p`
  font-family: "RalewayRegular";
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  max-width: 960px;
  width: 100%;
`
const BannerItemNext = styled.div`
  right: 10px;
  bottom: 10px;
  position: absolute;
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  img{
    position: absolute;
    width: 50%;
    right: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
    border-radius: 0px 10px 0px 0px;
  }
`
const BannerNextContent = styled.div`
    width: 100%;
  background: linear-gradient(90deg, #000000 55.64%, rgba(0, 0, 0, 0) 100%);
  z-index: 99;
  height: 100%;
  border-radius: 10px 0px 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 15px;
  gap: 15px;
  p:nth-child(1){
    font-size: 16px;
    line-height: 19px;
    font-family: "RalewayRegular";
    color: #FFFFFF;

  }
  p:nth-child(2){
    font-size: 16px;
    line-height: 19px;
    font-family: "RalewayBold";
    color: #FFFFFF;
  }
`

const anim = keyframes`
    0%{
      width: 0;
    }
  100%{
    width: 100%;
  }
`
const BannerNextProgressBar = styled.div`
    position: absolute;bottom: 0;width: 100%;
  height: 3px;
  z-index: 99;
  border-radius: 0 0 10px 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 10px 10px;
  &:before{
    content: '';
    display: block;
    animation: ${anim} linear 10s;
    height: 3px;background: white;
  }
    
`
const BannerItem = ({movie, nextFilm, handleNextSlide}) => {
    return (
        <BannerItemWrapper>
            <Img src = {`${img_original}${movie.backdrop_path}`} alt = ""/>
            <BannerItemContent>
                <BannerItemInfo>
                    <BannerItemTitle>{movie.title}</BannerItemTitle>
                    <BannerItemDescription>
                        {movie.overview}
                    </BannerItemDescription>
                    <Button to = {"/"}><img src={lines} alt=""/><span>Подробнее</span></Button>
                </BannerItemInfo>
            </BannerItemContent>
            <BannerItemNext onClick = {handleNextSlide}>
                <img src={`${img_original}${nextFilm.backdrop_path}`} alt=""/>
                <BannerNextContent>
                    <p>Следующий</p>
                    <p>{nextFilm.title}</p>
                </BannerNextContent>
                <BannerNextProgressBar></BannerNextProgressBar>
            </BannerItemNext>
        </BannerItemWrapper>
    );
}
export default BannerItem;