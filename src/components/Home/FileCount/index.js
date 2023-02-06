import Paragraph from "../../common/Paragraph"
import Title from "../../common/Title"
import { IoDocumentTextOutline } from "react-icons/io5"
import Container from "./Container"
import IconContainer from "./IconContainer"

export default function FileCount({ color, count, type }) {
  return (
    <Container color={color}>
      <IconContainer>
        <IoDocumentTextOutline />
      </IconContainer>
      <Title fontSize="36px">{count}</Title>
      <Paragraph color="#000" fontSize="22px">
        {type}
      </Paragraph>
    </Container>
  )
}
