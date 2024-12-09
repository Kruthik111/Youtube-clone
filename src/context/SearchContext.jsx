import React, { useRef, useState } from "react";

export const SearchContext = React.createContext();

const SearchContextProvider = ({ children }) => {
  const searchRef = useRef(null);
  const [focused, setFocused] = useState(false);
  return (
    <SearchContext.Provider value={{ searchRef, setFocused, focused }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
