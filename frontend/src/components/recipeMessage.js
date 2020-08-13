import React, { Component } from 'react'
import { Message,Header } from 'semantic-ui-react';

export default class RecipeMessage extends Component {
  render() {
    return(
      this.props.recipes.map( (recipe) => (
        <Message key={recipe.id}>
        <Message.Header>{recipe.name}</Message.Header>
        <Message.List>
        <Message.Item>'Id'{recipe.id}</Message.Item>
        <Message.Item>'IngredientsId'{recipe.IngredientsId}</Message.Item>
        <Message.Item>'stepId'{recipe.stepId}</Message.Item>
        <Message.Item>'userId'{recipe.userId}</Message.Item>
        <Message.Item>'status'{recipe.status}</Message.Item>
        </Message.List>
        </Message>
      ))
    );  
  }
}