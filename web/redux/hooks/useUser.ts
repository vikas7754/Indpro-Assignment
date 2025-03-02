import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../states/user";

type State = {
  user: {
    isLoggedIn: boolean;
    user: any;
  };
};

export const useUser = () => {
  const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);
  const user = useSelector((state: State) => state.user.user);
  const dispatch = useDispatch();

  const loginFn = (user: any) => {
    dispatch(login(user));
  };

  const logoutFn = () => {
    dispatch(logout());
  };

  return {
    isLoggedIn,
    user,
    login: loginFn,
    logout: logoutFn,
  };
};

export default useUser;
