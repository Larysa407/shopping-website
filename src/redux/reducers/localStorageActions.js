export const loadDataFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };
  
  export const saveDataToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxState", serializedState);
    } catch (error) {
    }
  };
  