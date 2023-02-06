import styled from "styled-components"

const Title = styled.p`
  width: ${props => props.width}
  font-family: "TT Commons";
  font-style: normal;
  font-weight: ${props => props.fontWeight ?? "600"};
  font-size: ${props => props.fontSize ?? "32px"};
  text-align: ${props => props.textAlign ?? "center"};
  color: #00000;
  margin: ${props => props.margin ?? "0"};
  display: ${props => props.display};
`

export default Title
