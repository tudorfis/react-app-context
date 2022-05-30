import React, { useContext } from 'react'
import Recipe from './Recipe'
import { AppContext } from './App'

export default function RecipeList({ recipes }) {
  const { actions } = useContext(AppContext)

  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Recipe key={recipe.id} {...recipe} />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn--primary"
          onClick={actions.handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  )
}
