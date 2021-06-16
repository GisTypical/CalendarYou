import { createContext } from "react";

export interface Message {
  username: string | null;
  setUsername: any;
}

const UserContext = createContext<Message>({
  username: null,
  setUsername: null,
});

export default UserContext;
