const INCREMENT = "INCREMENT";
const CHANGE_COLOR = "CHANGE_COLOR";

export const increment = step => {
  return {
    type: INCREMENT,
    payload: step
  };
};

export const changeColor = color => {
  return {
    type: CHANGE_COLOR,
    payload: color
  };
};
