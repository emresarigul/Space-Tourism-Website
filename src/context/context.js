import { createContext, useState } from "react";

export const PageContexts = createContext();

function PageContextsProvider({ children }) {
  const [navActive, setNavActive] = useState(false);
  const [navIndex, setNavIndex] = useState(0);
  return (
    <PageContexts.Provider
      value={{ navActive, setNavActive, navIndex, setNavIndex }}
    >
      {children}
    </PageContexts.Provider>
  );
}

export default PageContextsProvider;
