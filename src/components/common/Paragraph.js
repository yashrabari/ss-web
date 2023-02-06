import styled from "styled-components"

const Paragraph = styled.p`
  font-family: "TT Commons";
  font-style: normal;
  font-weight: ${props => (props.bold ? 600 : 400)};
  font-size: ${props => props.fontSize ?? "16px"};
  line-height: 26px;
  text-align: ${props => props.textAlign ?? "center"};
  max-width: ${props => props.width ?? "500px"};
  color: ${props => props.color ?? "rgba(0, 0, 0, 0.5)"};
  margin: ${props => props.margin ?? "0"};
  display: ${props => props.display ?? "inline"};
  justify-content: ${props => props.justifyContent ?? ""};
  align-items: ${props => props.alignItems ?? ""};
  cursor: ${props => props.link ? 'pointer' : props.cursor ?? ""};
`

export default Paragraph
