import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
  padding: ${props => props.padding};
  width: ${props => props.width};
  margin: ${props => props.margin};
  ${props => props.link && "cursor:pointer;"}
`

export default Row
