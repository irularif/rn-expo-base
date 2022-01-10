import { createStore } from "libs/utils/redux";
import { cloneDeep } from "lodash";
import { IFilterStore } from "../misc";

export interface INewsDetailStore {
  id: number;
  title: string;
  content: string;
  date: string;
  is_featured: boolean;
  img_header: string;
  created_by: number;
  created_date: string;
  updated_by: number;
  updated_date: string;
}

export interface IFilterNewsStore extends IFilterStore {
  is_featured?: boolean;
}

export interface INewsStore {
  isLoading: boolean;
  items: Array<INewsDetailStore>;
  total_record: number;
  page: number;
  filter: IFilterNewsStore;
}

export const initialNewsDetail: INewsDetailStore = {
  id: 0,
  title: "",
  content: "",
  date: "",
  is_featured: false,
  img_header: "",
  created_by: 0,
  created_date: "",
  updated_by: 0,
  updated_date: "",
};

export const initialNews: INewsStore = {
  filter: {},
  items: [],
  total_record: 0,
  page: 0,
  isLoading: false,
};

const NewsState = createStore({
  name: "news",
  initialState: initialNews,
  reducers: {
    updateItems(state, action) {
      let nstate = cloneDeep(state);
      nstate.items.push(action.payload?.data);
      nstate.total_record = action.payload.total_record;
      return nstate;
    },
    update(state, action) {
      let nstate = cloneDeep(state);
      Object.assign(nstate, action.payload);
      return nstate;
    },
  },
});

export const NewsStateAction = NewsState.actions;

export default NewsState;
