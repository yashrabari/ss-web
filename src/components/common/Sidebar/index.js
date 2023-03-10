import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/Logo.svg";
import { logout } from "../../../store/actions/auth";
import Brand from "../Brand";
import SidebarItem from "./SidebarItem";
import { IoLogOutOutline } from "react-icons/io5";
import routes from "./routes";
import SidebarContainer from "./SidebarContainer";
import useDevice from "../../../utils/hook/mediaQuery";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isTablet } = useDevice();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <SidebarContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "start",
          // margin: "56px 0 auto 0",
          overflow: "hidden",
        }}
      >
        <Logo className="logo_width" />
        <Brand>S & S Vault</Brand>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          alignSelf: "start",
          margin: "56px 0 auto 0",
          overflow: "hidden",
        }}
      >
        {routes.map((route, index) => (
          <SidebarItem
            key={index}
            active={location.pathname === route.pathname}
            {...route}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          alignSelf: "start",
          margin: "auto 0 0",
          overflow: "hidden",
        }}
      >
        <SidebarItem
          name="Logout"
          Icon={IoLogOutOutline}
          onClick={handleLogout}
        />
      </div>
    </SidebarContainer>
  );
}
