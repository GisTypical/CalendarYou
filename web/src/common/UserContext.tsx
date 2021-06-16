import { createContext } from "react";

export interface Message {
  username: String | null;
  setUsername: any;
}

const UserContext = createContext<Message>({
  username: null,
  setUsername: null,
});

export default UserContext;
