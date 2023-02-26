import styled from "styled-components";

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  @media (max-width: 900px) {
    margin: 20px auto;
  }
`;

export default ButtonBar;
