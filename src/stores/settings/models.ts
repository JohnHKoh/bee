export const DetailOptions = {
  stats: "stats",
  words: "words",
} as const;
export type DetailOptionsType = typeof DetailOptions[keyof typeof DetailOptions];

export const WordSortOptions = {
  Found: "Found",
  Length: "Length",
  Alphabetic: "Alphabetic",
} as const;
export type WordSortOptionsType = typeof WordSortOptions[keyof typeof WordSortOptions];

export type SettingsState = {
  vibration: boolean;
  details: DetailOptionsType;
  sort: WordSortOptionsType;
};
