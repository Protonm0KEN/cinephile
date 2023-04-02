import styled from "styled-components";
import {Link} from "react-router-dom";

export const Button = styled(Link)`
  background: #149A03;
  border-radius: 10px;
  width: max-content;
  padding: 15px 20px;
  display: flex;
  column-gap: 15px;
  & span {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    font-family: "RalewayRegular";
  }
`