export interface IRecipePuppy {
  title: string;
  version: number;
  href: string;
  results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}
