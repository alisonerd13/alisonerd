export type albums =
  | 'taylorSwift'
  | 'fearlessTV'
  | 'speakNowTV'
  | 'redTV'
  | 'one989TV'
  | 'reputation'
  | 'lover'
  | 'folklore'
  | 'evermore'
  | 'midnights';
  
  export type TThemeAttr = {
  id: string;
  symbol: string[];
  color: string[];
  name: string;
};

export type TThemes = {
  taylorSwift: TThemeAttr;
  fearlessTV: TThemeAttr;
  speakNowTV: TThemeAttr;
  redTV: TThemeAttr;
  one989TV: TThemeAttr;
  reputation: TThemeAttr;
  lover: TThemeAttr;
  folklore: TThemeAttr;
  evermore: TThemeAttr;
  midnights: TThemeAttr;
};