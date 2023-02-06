import React from "react"
import styled from "styled-components"
import { MdKeyboardBackspace } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const BackContainer = styled.div`
  width: 64px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 40px;
  background: #fafafa;
  border-radius: 10px;
  cursor: pointer;
`

export default function Back({onClick}) {
  const navigate = useNavigate()

  return (
    <BackContainer onClick={() => onClick ? onClick(): navigate(-1)}>
      <MdKeyboardBackspace />
    </BackContainer>
  )
}
