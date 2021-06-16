import { createContext } from "react";
const UserContext = createContext({
    username: null,
    setUsername: null,
});
export default UserContext;
