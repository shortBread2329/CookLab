import React from 'react';
import { Message } from 'semantic-ui-react';

function recipeMessage (recipes) {
  return(
    recipes.map( recipe=> {
      return <Message key={recipe.id}>
      <Message.Header>{recipe.name}</Message.Header>
      <Message.List>
      <Message.Item>'Id'{recipe.id}</Message.Item>
      <Message.Item>'IngredientsId'{recipe.IngredientsId}</Message.Item>
      <Message.Item>'stepId'{recipe.stepId}</Message.Item>
      <Message.Item>'userId'{recipe.userId}</Message.Item>
      <Message.Item>'status'{recipe.status}</Message.Item>
      </Message.List>
      </Message>
    })
  );
}

export default recipeMessage;