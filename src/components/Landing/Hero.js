import styled from "styled-components"

import { homeImg } from "../../assets/images"

const Hero = styled.div`
  width: 1016px;
  height: 723px;

  z-index: 50;

  background: url(${homeImg});
  background-position: center center;
  border: 17px solid #ffffff;
  filter: drop-shadow(0px 4px 25px rgba(133, 133, 133, 0.18));
  border-radius: 15px;

  margin-bottom: 94px;
`

export default Hero
