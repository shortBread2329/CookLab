import React, { Component }  from 'react';
import SystemConst from './Const';
import { Grid } from 'semantic-ui-react'
import RecipeMessage from './components/RecipeMessage';
import MenuVertical from './components/menu';
import LoginCard from './components/LoginCard';
import PreviewRecipe from './components/PreviewRecipe';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    searchKeyword:"",
    recipes:[],
    previewRecipes:[],
    activeItem:'',
    loginState:false,
  }

  message = ''

  updateMenuState(_state){
    this.setState(_state);
    console.log(_state);
  }

  //コンポーネントが呼ばれた初回に起動
  componentDidMount() {
  }

  render() {
    switch(this.state.activeItem){
      case SystemConst.MENU_ITEM_0:
        this.message = <RecipeMessage recipes={this.state.recipes} />
        break;
      case SystemConst.MENU_ITEM_1:
        this.message = <PreviewRecipe recipes={this.state.previewRecipes}/>
        break;
      case SystemConst.MENU_ITEM_2:
        this.message = <RecipeMessage recipes={this.state.recipes} />
        break;
      case SystemConst.MENU_ITEM_4:
        this.message = <LoginCard />
        break;
      default:
        this.message = <p>{this.state.activeItem}画面はまだ工事中です。</p>;
        break;
    }

    return (
      <Grid>
      <Grid.Column stretched width={12} >
        {this.message}
      </Grid.Column>
      <Grid.Column width={4}> 
        <MenuVertical updateMenuState={this.updateMenuState.bind(this)} />
      </Grid.Column>
      </Grid>
      );
  }
}

export default App;