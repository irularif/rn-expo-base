import { INewsStore } from "app/store/news";

export type TRole = "guest" | "user" | "admin";

export type TMode = "dev" | "staging" | "production";

export type RootStore = {
  news: INewsStore;
  auth: any;
};
