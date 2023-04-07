export const initialState = { theme: "light", data: [] };

export const actions = {
  themeLight: "setLight",
  setThemeDark: "setDarkK",
  setData: "setData",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setData: {
      return { ...state, data: action.payload };
    }
    case actions.setThemeDark:
      return { ...state, theme: "dark" };
    case actions.themeLight:
      return { ...state, theme: "light" };
    default: {
      return state;
    }
  }
};
