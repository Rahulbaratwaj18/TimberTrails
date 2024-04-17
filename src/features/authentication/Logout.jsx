import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonGroup from "../../ui/ButtonGroup";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonGroup disabled={isLoading} onClick={logout}>
      {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle size={25} />}
    </ButtonGroup>
  );
}

export default Logout;
