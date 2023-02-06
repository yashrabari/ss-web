import React from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { ReactComponent as Logo } from "../../../assets/images/Logo.svg"
import { logout } from "../../../store/actions/auth"
import Brand from "../Brand"
import SidebarItem from "./SidebarItem"
import { IoLogOutOutline } from "react-icons/io5"
import routes from "./routes"
import SidebarContainer from "./SidebarContainer"

export default function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <SidebarContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Logo />
        <Brand>S & S Vault</Brand>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          alignSelf: "start",
          margin: "56px 0 auto 0"
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
      <SidebarItem
        name="Logout"
        Icon={IoLogOutOutline}
        onClick={handleLogout}
      />
    </SidebarContainer>
  )
}
