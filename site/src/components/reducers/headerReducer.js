const { MENU, DRAWER } = require('./constants/constants');

const initialState = {
  openMenu: false,
  openDrawer: false,
};
export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU:
      return { ...state, openMenu: action.payload };
    case DRAWER:
      return { ...state, openDrawer: action.payload };
    default:
      return state;
  }
};
