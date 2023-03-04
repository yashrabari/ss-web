import styled from "styled-components";

const SidebarContainer = styled.nav`
  align-self: flex-start;
  width: 200px;
  height: 100vh;
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
    width: 185px;
  }
  /* @media (max-width: 1100px) {
    width: 18%;
  }
  @media (max-width: 900px) {
    width: 100%;
  } */
`;

export default SidebarContainer;
