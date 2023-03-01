import styled from "styled-components";

const SidebarContainer = styled.nav`
  align-self: flex-start;
  width: 15%;
  height: 95%;
  padding: 24px;
  margin: 0;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  /* overflow: hidden; */
  @media (max-width: 1300px) {
    width: 16%;
  }
  @media (max-width: 1100px) {
    width: 18%;
  }
  @media (max-width: 900px) {
    width: 20%;
  }
  @media (max-width: 800px) {
    width: 8%;
  }
  @media (max-width: 700px) {
    width: 10%;
  }
  @media (max-width: 600px) {
    width: 12%;
  }
  @media (max-width: 550px) {
    width: 13%;
  }
  @media (max-width: 400px) {
    width: 14%;
  }
`;

export default SidebarContainer;
