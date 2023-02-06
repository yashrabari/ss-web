import styled from "styled-components"

const IconButton = styled.div`
  width: 64px;
  height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 5px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default IconButton
