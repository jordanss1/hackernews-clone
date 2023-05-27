import { useCallback, useReducer } from "react";

export const useClasses = (initial) => {
  const [logo, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "LOGO":
        return {
          ...state,
          theSpan: action.theSpan,
          topBorder: action.topBorder,
          container: action.container,
          leftBorder: action.leftBorder,
        };
    }
  }, initial);

  const setLogo = useCallback((theSpan, topBorder, container, leftBorder) => {
    dispatch({
      type: "LOGO",
      theSpan,
      topBorder,
      container,
      leftBorder,
    });
  }, []);

  return { setLogo, logo };
};
