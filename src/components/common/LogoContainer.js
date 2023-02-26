import styled from "styled-components";

const LogoContainer = styled.div`
  position: absolute;
  top: -65px;
  width: 110px;
  height: 110px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#ffffff"};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-width: 14px;
  border-color: #fafafa;

  @media (max-width: 1200px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
    border-width: 12px;
    top: -60px;
  }
  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
    border-width: 10px;
    top: -55px;
  }
`;

export default LogoContainer;
