import { Character } from "../services/types";

export enum SCREEN_NAMES {
  HOME = 'HOME',
  CHARACTER_DETAILS = 'CHARACTER_DETAILS',
}

export type RootStackParams = {
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.CHARACTER_DETAILS]: { character: Character };
};
