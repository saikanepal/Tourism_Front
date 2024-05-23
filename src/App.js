import React from "react";
import AppRouter from "./AppRouter";
import UserState from "./Context/UserState";
function App() {
  return (
    <div className="App text-gray-500 ">
      <UserState>
        <AppRouter />
      </UserState>
    </div>
  );
}

export default App;
