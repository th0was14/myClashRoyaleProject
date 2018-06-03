export interface Arena {
  name: string;
  arena: string;
  arenaID: number;
  trophyLimit: number;
}

export interface Badge {
  name: string;
  category: string;
  id: number;
  image: string;
}

export interface Clan {
  tag: string;
  name: string;
  role: string;
  donations: number;
  donationsReceived: number;
  donationsDelta: number;
  badge: Badge;
}

export interface FavoriteCard {
  name: string;
  id: number;
  maxLevel: number;
  icon: string;
  key: string;
  elixir: number;
  type: string;
  rarity: string;
  arena: number;
  description: string;
}

export interface Stats {
  clanCardsCollected: number;
  tournamentCardsWon: number;
  maxTrophies: number;
  threeCrownWins: number;
  cardsFound: number;
  favoriteCard: FavoriteCard;
  totalDonations: number;
  challengeMaxWins: number;
  challengeCardsWon: number;
  level: number;
}

export interface Games {
  total: number;
  tournamentGames: number;
  wins: number;
  warDayWins: number;
  winsPercent: number;
  losses: number;
  lossesPercent: number;
  draws: number;
  drawsPercent: number;
}

export interface CurrentDeck {
  name: string;
  level: number;
  maxLevel: number;
  count: number;
  rarity: string;
  requiredForUpgrade: number;
  leftToUpgrade: number;
  icon: string;
  key: string;
  elixir: number;
  type: string;
  arena: number;
  description: string;
  id: number;
}

export interface Card {
  name: string;
  level: number;
  maxLevel: number;
  count: number;
  rarity: string;
  requiredForUpgrade: number;
  leftToUpgrade: number;
  icon: string;
  key: string;
  elixir: number;
  type: string;
  arena: number;
  description: string;
  id: number;
}

export interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
}

export interface PlayerInfo {
  tag?: string;
  name?: string;
  trophies?: number;
  rank?: any;
  arena?: Arena;
  clan?: Clan;
  stats?: Stats;
  games?: Games;
  deckLink?: string;
  currentDeck?: CurrentDeck[];
  cards?: Card[];
  achievements?: Achievement[];
}
