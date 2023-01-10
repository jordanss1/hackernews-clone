import { useCallback, useReducer } from "react";

export const useClasses = (initial) => {
  const [logo, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "LOGO":
        return {
          ...state,
          the: action.the,
          hacker: action.hacker,
        };
    }
  }, initial);

  const setLogo = useCallback((the, hacker) => {
    dispatch({
      type: "LOGO",
      the,
      hacker,
    });
  }, []);

  return { setLogo, logo };
};
