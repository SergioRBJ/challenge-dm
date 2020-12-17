import { transpileModule } from "typescript";
import { IGiphy } from "../../infra/entities/Giphy"
import { RecipeEntity } from "../../infra/entities/Recipe"
import { ResultsEntity } from "../../infra/entities/RecipePuppy"

const recipeMapper = (recipePuppy: ResultsEntity, giphy: IGiphy): RecipeEntity => {
  const {title , ingredients, href} = recipePuppy;
  const { data } = giphy;

  const imageUrl = data[0]?.images?.original?.url;
  const ingredientsSort = ingredients.split(',').map( ingredient => ingredient.trim());

  const result = {
    title,
    ingredients: ingredientsSort,
    link: href,
    gif: imageUrl
  }

  return result
}

export default recipeMapper
