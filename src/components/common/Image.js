import styled from "styled-components"

const Image = styled.img`
  width: ${props => props.width ?? "320px"};
  height: ${props => props.height};
  object-fit: ${props => props.objectFit ?? "contain"};
  margin: ${props => props.margin ?? "5px"};
  border-radius: ${props => props.borderRadius};
`

export default Image
