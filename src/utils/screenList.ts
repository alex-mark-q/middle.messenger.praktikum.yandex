import Main from "pages/main";
import Chat from "pages/chat";


export enum Screens {
  Main = "main",
  Chat = "chat"
}

const map = {
  [Screens.Main]: Main,
  [Screens.Chat]: Chat
};

export const getScreenComponent = (screen: Screens) => {
  return map[screen];
};
