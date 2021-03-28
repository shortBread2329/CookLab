import React, { Component } from 'react'
import RecipeMessage from './RecipeMessage';

export default class ViewRecipe extends Component {
  render() {
    return(
        <RecipeMessage recipes={this.props.recipes}/>
    );
  }
}