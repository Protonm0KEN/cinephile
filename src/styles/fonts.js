import {createGlobalStyle} from "styled-components";
//* Font Variables for styled component
//* inter
import InterRegular from "../assets/fonts/Inter/Inter-Regular.ttf"
//* Montserrat
import MontserratBold from "../assets/fonts/Montserrat/Montserrat-Bold.ttf"
import MontserratBoldItalic from "../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf"
import MontserratLight from "../assets/fonts/Montserrat/Montserrat-Light.ttf"
import MontserratReg from "../assets/fonts/Montserrat/Montserrat-Regular.ttf"
//* Raleway
import RalewayBold from "../assets/fonts/Raleway/Raleway-Bold.ttf"
import RalewayRegular from "../assets/fonts/Raleway/Raleway-Regular.ttf"
const FontStyles = createGlobalStyle
    `
      //* Inter
      @font-face {
        font-family: "IntReg";
        src: url(${InterRegular});
      }
      
      //* Montserrat
      @font-face {
        font-family: "MontsBold";
        src: url(${MontserratBold});
      }

      @font-face {
        font-family: "MontsBoldItalic";
        src: url(${MontserratBoldItalic});
      }

      @font-face {
        font-family: "MontsLight";
        src: url(${MontserratLight});
      }

      @font-face {
        font-family: "MontsReg";
        src: url(${MontserratReg});
      }
      
      //RaleWau
      @font-face {
        font-family: "RalewayBold";
        src: url(${RalewayBold});
      }
      @font-face {
        font-family: "RalewayRegular";
        src: url(${RalewayRegular});
      }
    `
export default FontStyles