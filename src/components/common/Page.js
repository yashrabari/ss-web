import styled from "styled-components";

const Page = styled.div`
  background: #fafafa;
  /* min-width: 1440px; */
  height: ${(props) => props.height ?? "100vh"};
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => props.padding ?? "0"};
  margin: 0;
  overflow: ${(props) => props.overflow ?? "auto"};
  position: relative;
`;

export default Page;
