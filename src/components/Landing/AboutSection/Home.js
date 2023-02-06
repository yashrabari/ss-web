import styled from "styled-components"
import { homeImg } from "../../../assets/images"

const Home = styled.div`
  position: absolute;
  width: 493.52px;
  height: 351.56px;
  left: 944px;
  top: 356px;

  background: url(${homeImg});
  background-position: center center;
  background-size: contain;
  border: 5px solid #292d32;
  border-radius: 15px;
  transform: matrix(0.97, 0.14, 0.25, 0.99, 0, 0);
`

export default Home
