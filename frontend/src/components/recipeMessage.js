import React, { Component } from 'react'
import { Label,Message,Table,Item } from 'semantic-ui-react';

export default class RecipeMessage extends Component {
  render() {
    return(
      //プロパティはオブジェクトとして受け取っているようだったのでArrayに変換
      // Array.from(this.props.recipes).map( recipe => {
      this.props.recipes.map( function( recipe, index ){

        let recipeIngredient = recipe.ingredient.map( ingredient => (
          <Table.Row key={ingredient.ingredient}>
            <Table.Cell>{ingredient.name}</Table.Cell>
            <Table.Cell>{ingredient.quantity}</Table.Cell>
            <Table.Cell>{ingredient.unit}</Table.Cell>
          </Table.Row>
        ))

        let recipeStep = recipe.step.map( step => (
          <Table.Row key={step.stepId}>
            <Table.Cell>{step.stepText}</Table.Cell>
          </Table.Row>))

        let tableElem = (tableBody) => {
          return(
            <Table unstackable basic='very' compact='very'>
              <Table.Body>
              {tableBody}
              </Table.Body>
            </Table>
          )
        }
        let evenFlag = index % 2 === 0 ? "left" : "right"    
        return(
      <Message key={recipe.id}>
        <Item.Group>
        <Item>
          <Item.Image size='medium' floated={evenFlag} src={recipe.image} />
          <Item.Content>
            <Item.Header as='a'>{recipe.name}</Item.Header>
            <Item.Description>
              <Label as='a' color='teal' tag>材料</Label>
            </Item.Description>
            <Item.Content>
              {tableElem(recipeIngredient)}        
            </Item.Content>
            <Item.Description>
              <Label as='a' color='teal' tag>作り方</Label>
            </Item.Description>
            <Item.Content>
              {tableElem(recipeStep)}          
            </Item.Content>
          </Item.Content>
        </Item>
        </Item.Group>
      </Message>
       )
      })
    );
  }
}