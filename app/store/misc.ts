import { IAPI } from "pkgs/libs/utils/api";
import { RootStore } from "root/types/global";

export interface IFilterStore {
  date?: string;
  keyword?: string;
}

export interface IAPIAction {
  storeName: keyof RootStore;
  config: IAPI;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
}

export const apiAction = (params: IAPIAction) => {
  return {
    type: "API",
    payload: params,
  };
};
