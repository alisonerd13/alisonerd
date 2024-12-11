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

export type TTheme = {
  id: string;
  symbol: string[];
  color: string[];
  name: string;
};

export type TThemes = {
  taylorSwift: TTheme;
  fearlessTV: TTheme;
  speakNowTV: TTheme;
  redTV: TTheme;
  one989TV: TTheme;
  reputation: TTheme;
  lover: TTheme;
  folklore: TTheme;
  evermore: TTheme;
  midnights: TTheme;
};
