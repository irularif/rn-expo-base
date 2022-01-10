import { AuthStateAction } from ".";
import { apiAction } from "../misc";

interface ILogin {
  username: string;
  password: string;
}

const AuthAction = {
  login: (data: ILogin) => async (dispatch: any) => {
    const res = dispatch(
      await apiAction({
        storeName: "auth",
        config: {
          url: "login",
          method: "POST",
          data,
        },
      })
    );

    if (!!res) {
      AuthStateAction.setUser(res);
    }
  },
  logout: (dispatch: any) => {
    dispatch((AuthStateAction as any).init());
  },
};

export default AuthAction;
