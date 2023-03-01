import React from "react";
import styled from "styled-components";
import useDevice from "../../../utils/hook/mediaQuery";
import CustomLink from "../CustomLink";

const SidebarItemContainer = styled.div`
  align-self: start;
  width: 185px;
  height: 56px;
  border-radius: 0px 10px 10px 0px;
  margin: 0;
  padding: 0 0 0 10px;
  background: ${(props) => (props.active ? "#00a652" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};

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
  @media (max-width: 1400px) {
    width: 170px;
  }
  @media (max-width: 1200px) {
    width: 155px;
  }
  @media (max-width: 1000px) {
    width: 145px;
  }
  @media (max-width: 800px) {
    width: 50px;
    padding: 0 0 0 10px;
  }
  @media (max-width: 600px) {
    width: 50px;
    padding: 0 0 0 8px;
  }
  @media (max-width: 500px) {
    width: 40px;
    padding: 0 0 0 6px;
  }
  @media (max-width: 400px) {
    width: 37px;
    padding: 0 0 0 4px;
  }
`;

export default function SidebarItem({ name, Icon, active, to, onClick }) {
  const { isTablet } = useDevice();
  console.log(isTablet, "isTablet");
  return (
    <div onClick={onClick}>
      <CustomLink to={to ?? ""}>
        <SidebarItemContainer active={active}>
          {Icon && <Icon stroke={active ? "#fff" : "#000"} />}
          {!isTablet && name}
        </SidebarItemContainer>
      </CustomLink>
    </div>
  );
}
