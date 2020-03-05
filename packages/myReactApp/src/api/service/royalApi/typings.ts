export interface ArenaDto {
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

export interface ClanDto {
  tag: string;
  name: string;
  role: string;
  donations: number;
  donationsReceived: number;
  donationsDelta: number;
  badge: Badge;
}

export interface FavoriteCardDto {
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

export interface StatsDto {
  clanCardsCollected: number;
  tournamentCardsWon: number;
  maxTrophies: number;
  threeCrownWins: number;
  cardsFound: number;
  favoriteCard: FavoriteCardDto;
  totalDonations: number;
  challengeMaxWins: number;
  challengeCardsWon: number;
  level: number;
}

export interface GamesDto {
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

export interface CurrentDeckDto {
  name: string;
  level: number;
  displayLevel: number;
  maxLevel: number;
  count: number;
  rarity: string;
  requiredForUpgrade: number;
  leftToUpgrade: number;
  icon: string;
  iconUrls: {medium: string};
  key: string;
  elixir: number;
  type: string;
  arena: number;
  description: string;
  id: number;
}

export interface CardDto {
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

export interface AchievementDto {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
}

export interface PlayerInfoDto {
  tag?: string;
  name?: string;
  trophies?: number;
  rank?: any;
  arena?: ArenaDto;
  clan?: ClanDto;
  stats?: StatsDto;
  games?: GamesDto;
  deckLink?: string;
  currentDeck?: CurrentDeckDto[];
  cards?: CardDto[];
  achievements?: AchievementDto[];
}

export interface ChestDto {
  index: number;
  name: string;
}

export interface PlayerChestDto {
  items: ChestDto[];
}
