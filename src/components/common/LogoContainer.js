import styled from "styled-components"

const LogoContainer = styled.div`
  position: absolute;
  top: -65px;
  width: 110px;
  height: 110px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-width: 14px;
  border-color: #fafafa;
`

export default LogoContainer
