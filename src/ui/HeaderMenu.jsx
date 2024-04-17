import styled from "styled-components"
import ButtonIcon from "./ButtonIcon"
import { HiOutlineUser } from "react-icons/hi2"
import { useNavigate } from "react-router-dom";

import Logout from "../features/authentication/Logout"
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap:3rem;
  align-items: center;
  
`

function HeaderMenu() {
  const navigate = useNavigate();
  return (
   <StyledHeaderMenu>
    <li>
      <ButtonIcon onClick={() => navigate("/account")}>
        <HiOutlineUser size={25}
        />
      </ButtonIcon>
    </li>
    <li>
      <DarkModeToggle />
    </li>
    <li>
      <Logout />
    </li>
   </StyledHeaderMenu>
  )
}

export default HeaderMenu
