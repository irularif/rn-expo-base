// Extra args for middleware redux-thunk

import { IAPIAction } from "app/store/misc";
import api from "pkgs/libs/utils/api";
import { RootStore } from "root/types/global";
import Constants from "expo-constants";
import { get } from "lodash";

let manifest = get(Constants, "manifest.extra", {});
let mode = get(manifest, "mode", "dev");
let credential = manifest?.credentials[mode];

const apiMiddleware = ({ dispatch, getState }: any) => {
  return (next: any) => async (action: any) => {
    const { storeName, config, onError, onSuccess }: IAPIAction =
      action.payload;
    const state: RootStore = getState();

    try {
      if (action.type === "API") {
        if (!state[storeName].isLoading) {
          dispatch({
            type: `${storeName}/loading`,
            payload: true,
          });
        }
      }

      next(action);

      // only apply middleware to actions of type API

      if (action.type === "API") {
        if (config.url?.indexOf("http") === -1) {
          config.url = credential?.baseUrl + credential?.api;
        }

        return new Promise((resolve, reject) => {
          api(config)
            .then((res) => {
              if (onSuccess) {
                onSuccess(res);
              }
              resolve(res);
            })
            .catch((err) => {
              if (onError) {
                onError(err);
              }
              reject(err);
            })
            .finally(() => {
              if (state[storeName].isLoading) {
                dispatch({
                  type: `${storeName}/loading`,
                  payload: false,
                });
              }
            });
        });
      }
    } catch (error) {
      console.warn(error);
    }
  };
};

export const MiddlewareArgs = {
  api: apiMiddleware,
};
