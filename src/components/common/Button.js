import styled from "styled-components"

const Button = styled.button`
  width: ${props => props.width ?? "254px"};
  height: ${props => props.height ?? "60px"};
  background: ${props => props.color};
  border-radius: ${props => props.borderRadius ?? "5px"};
  ${props => props.border && "border: 1px solid #000000;"}

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.textColor ?? "#ffffff"};
  border: 1px solid rgba(0, 0, 0, 0.05);

  font-family: "TT Commons";
  font-size: 18px;
  font-weight: 600;

  margin: ${props => props.margin ?? "8px"};

  cursor: pointer;
`

export default Button
