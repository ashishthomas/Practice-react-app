import { createContext, useContext } from "react";

const UserContext = createContext();

function DisplayUser() {
  const user = useContext(UserContext);
  return <p> UserName: {user}</p>;
}
function ContextHook() {
  return (
    <UserContext.Provider value="Rohit">
      <DisplayUser />
    </UserContext.Provider>
  );
}

export default ContextHook;
