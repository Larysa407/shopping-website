import React, { createContext, useState } from "react";

const SwitchContext = createContext();

const SwitchProvider = ({children}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <SwitchContext.Provider value={{ isSelected, setIsSelected }}>
      {children}
    </SwitchContext.Provider>
  );
};

export { SwitchContext, SwitchProvider };
