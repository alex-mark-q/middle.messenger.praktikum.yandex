import Main from 'pages/main';


export enum Screens {
  Main = 'main',
}

const map = {
  [Screens.Main]: Main,
};

export const getScreenComponent = (screen: Screens) => {
  return map[screen];
};
