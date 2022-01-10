import { cloneDeep } from "lodash";
import { createStore } from "pkgs/libs/utils/redux";
import { TRole } from "root/types/global";

export interface IAuthUserStore {
  id?: number;
  name?: string;
}

export interface IAuthStore {
  token: string;
  role: TRole | TRole[];
  user: IAuthUserStore;
}

const initialAuthUserStore: IAuthUserStore = {
  id: 0,
  name: "",
};

const initialAuthStore: IAuthStore = {
  token: "",
  role: "guest",
  user: {},
};

const AuthState = createStore({
  name: "auth",
  initialState: initialAuthStore,
  reducers: {
    setUser(state, action) {
      let nstate = cloneDeep(state);
      Object.assign(nstate.user, action.payload);
      return nstate;
    },
    update(state, action) {
      let nstate = cloneDeep(state);
      Object.assign(nstate, action.payload);
      return nstate;
    },
  },
});

export const AuthStateAction = AuthState.actions;

export default AuthState;
