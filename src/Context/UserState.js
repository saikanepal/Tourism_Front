import react, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const user = {
    email: "admin@gmail.com",
    password: "admin",
  };

  //   const [user, setUser] = useState("");
  //   const updateUser = (userData) => {
  //     setUser(userData);
  //   };
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserState;

// import React, { useState } from "react";
// import UserContext from "./userContext";

// const UserState = (props) => {
//   const [user, setUser] = useState("");

//   //   const updateUser = (userData) => {
//   //     setUser(userData);
//   //   };

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserState;
