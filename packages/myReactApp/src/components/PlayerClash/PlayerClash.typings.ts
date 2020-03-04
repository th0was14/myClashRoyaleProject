export interface PlayerInfo {
  id?: string;
  name?: string;
  trophies?: number;
  clanName?: string;
  currentDeck?: Card[];
}

export interface Card {
  id: number;
  icon: string;
  level: number;
}

export interface Chest {
  name: string;
  src: string;
  position: number;
}

export interface PlayerChest {
  upcomingChests: Chest[];
}

