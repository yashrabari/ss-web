import styled from "styled-components"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  height: ${props => props.height ?? "100%"};
  overflow: ${props => props.overflow ?? "auto"};
  flex-basis: ${props => props.width};
  flex-grow: 0;
  flex-shrink: 0;
  padding: ${props => props.padding ?? "0"};
  margin: ${props => props.margin ?? "0"};
  box-sizing: border-box;
  ${props =>
    props.hideScrollBar ? "::-webkit-scrollbar {display: none;}" : ""};
`

export default Column
