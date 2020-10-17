import React, { Component } from 'react'
import { Message,List } from 'semantic-ui-react';

export default class RecipeMessage extends Component {
  render() {
    return(
      //プロパティはオブジェクトとして受け取っているようだったのでArrayに変換
      // Array.from(this.props.recipes).map( recipe => {
      this.props.recipes.map( recipe => {

        let recipeItems = [];
        recipeItems.push(<List.Item>■材料名■</List.Item>);
        recipe.ingredientId.map( ingredient => {
          recipeItems.push(<List.Item>{ingredient.ingredientId}:{ingredient.name}:{ingredient.quantity}</List.Item>);
        })
        recipeItems.push(<List.Item>■作り方■</List.Item>);
        recipe.stepId.map( step => {
          recipeItems.push(<List.Item>{step.stepId}:{step.stepText}</List.Item>);
        })
    
        return(
          <Message key={recipe.id}>
          <Message.Header>{recipe.name}</Message.Header>
          <List>
          {/* <List.Item>Id:{recipe.id}</List.Item> */}
          {/* <Message.Item>'userId'{recipe.userId}</Message.Item> */}
          {/* <List.Item>validFlag:{recipe.validFlag.toString()}</List.Item> */}
          {recipeItems}
          </List>
          </Message>  
        )
      })
    );
  }
}