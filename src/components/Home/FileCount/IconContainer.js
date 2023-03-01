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
  }
`;

export default IconContainer;
