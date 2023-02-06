import React from "react"
import styled from "styled-components"
import CustomLink from "../CustomLink"

const SidebarItemContainer = styled.div`
  align-self: start;
  width: 195px;
  height: 56px;
  border-radius: 0px 10px 10px 0px;
  margin: 0;
  padding: 0 0 0 10px;
  background: ${props => (props.active ? "#00a652" : "#fff")};
  color: ${props => (props.active ? "#fff" : "#000")};

  font-family: "TT Commons";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  > * {
    margin: 8px;
  }
`

export default function SidebarItem({ name, Icon, active, to, onClick }) {
  return (
    <div onClick={onClick}>
      <CustomLink to={to ?? ""}>
        <SidebarItemContainer active={active}>
          {Icon && <Icon stroke={active ? "#fff" : "#000"} />}
          {name}
        </SidebarItemContainer>
      </CustomLink>
    </div>
  )
}
