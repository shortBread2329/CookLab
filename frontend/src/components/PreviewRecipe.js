import React, { Component } from 'react'
import RecipeMessage from './RecipeMessage';
import { Message,Button } from 'semantic-ui-react';

export default class PreviewRecipe extends Component {
  render() {
    return(
        <Message>
        <Message.Header>プレビュー</Message.Header>
        <RecipeMessage recipes={this.props.recipes}/>
        </Message>
    );
  }
}