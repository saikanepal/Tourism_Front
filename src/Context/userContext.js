import { createContext } from "react";

const userContext = createContext();
export default userContext;

// // SiderBarContext.js
// import React, { createContext, useState, useContext } from "react";

// // Create the context
// const UserContext = createContext();

// // Create a provider component
// export const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState();

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Create a custom hook to use the SiderBarContext
// export const useUserState = () => {
//   return useContext(UserContext);
// };
