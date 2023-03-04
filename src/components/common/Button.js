import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width ?? "auto"};
  height: ${(props) => props.height ?? "auto"};
  background: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius ?? "5px"};
  ${(props) => props.border && "border: 1px solid #000000;"}

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.textColor ?? "#ffffff"};
  border: 1px solid rgba(0, 0, 0, 0.05);

  font-family: "TT Commons";
  font-size: 18px;
  font-weight: 600;
  padding: 10px 30px;
  margin: ${(props) => props.margin ?? "8px"};

  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 17px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 7px 20px;
  }
`;

export default Button;
