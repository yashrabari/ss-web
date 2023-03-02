import styled from "styled-components";

const Title = styled.p`
  width: ${(props) => props.width};
  font-family: "TT Commons";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? "600"};
  line-height: ${(props) => props.lineHeight ?? "auto"};
  font-size: ${(props) => props.fontSize ?? "32px"};
  text-align: ${(props) => props.textAlign ?? "center"};
  color: "#00000";
  margin: ${(props) => props.margin ?? "0"};
  display: ${(props) => props.display};
  @media (max-width: 1200px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    font-size: 23px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export default Title;
