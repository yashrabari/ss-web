import styled from "styled-components";

const IconContainer = styled.div`
  position: absolute;
  width: 46px;
  height: 46px;
  left: 140px;
  top: 36px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1400px) {
    left: 110px;
  }
  @media (max-width: 1300px) {
    left: 100px;
    top: 10px;
  }
  @media (max-width: 1200px) {
    left: 90px;
    top: 10px;
  }
  @media (max-width: 1100px) {
    left: 60px;
    top: 10px;
  }
  @media (max-width: 1000px) {
    left: 90px;
    top: 25px;
  }
  @media (max-width: 850px) {
    left: 105px;
    top: 20px;
  }
  @media (max-width: 700px) {
    left: 75px;
    width: 40px;
    height: 40px;
  }
  @media (max-width: 600px) {
    left: 165px;
  }
  @media (max-width: 550px) {
    left: 145px;
  }
  @media (max-width: 450px) {
    left: 150px;
  }
  @media (max-width: 400px) {
    left: 115px;
  }
  @media (max-width: 370px) {
    left: 90px;
  }
`;

export default IconContainer;
