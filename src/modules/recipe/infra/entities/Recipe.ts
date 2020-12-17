export interface IRecipe {
  keywords: string[];
  recipes: RecipeEntity[];
}

export interface RecipeEntity {
  title: string;
  ingredients: string[];
  link: string;
  gif: string;
}
