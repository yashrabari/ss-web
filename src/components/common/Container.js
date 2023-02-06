import styled from "styled-components"

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent ?? "center"};
  align-items: ${props => props.alignItems ?? "center"};
  width: ${props => props.width};
  height: ${props => props.height};

  background: #ffffff;
  border-radius: ${props => props.borderRadius ?? "10px"};

  margin: ${props => props.margin ?? "0"};
  padding: ${props => props.padding ?? "0"};

  flex-shrink: 0;
`

export default Container
