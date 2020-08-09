import { combineReducers } from "redux";
import { TOGGLE_DARK_MODE } from "./actions";
const STORAGE_ITEM = "darkMode";

const defaultState = {
  darkMode: JSON.parse(localStorage.getItem(STORAGE_ITEM)) || false,
};

export const settings = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const darkMode = !state.darkMode;
      localStorage.setItem(STORAGE_ITEM, darkMode);
      return { darkMode };
    default:
      return state;
  }
};

export default combineReducers({ settings });
