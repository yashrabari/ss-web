import styled from "styled-components"
import { packagesImg } from "../../../assets/images"

const Packages = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 500.27px;
  height: 354.79px;
  left: 1295.17px;
  top: 340.79px;

  background: url(${packagesImg});
  background-position: center center;
  background-size: contain;
  border: 5px solid #292d32;
  border-radius: 15px;
  transform: matrix(0.98, -0.14, -0.18, 0.99, 0, 0);
`

export default Packages
