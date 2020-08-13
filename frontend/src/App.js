import React, { Component }  from 'react';
import SystemConst from './Const';
import { Grid,Header } from 'semantic-ui-react'
import axios from 'axios';
import RecipeMessage from './components/RecipeMessage';
import MenuVertical from './components/menu';
import LoginCard from './components/LoginCard';
import CreateRecipeCard from './components/CreateRecipeCard';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    searchKeyword:'',
    recipes:[],
    activeItem:'',
    loginState:false,
  }

  message = ''

  getRecipes() {
    axios.defaults.baseURL = 'http://127.0.0.1:8000';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios
      .get('/api', )
      .then(res => {
          this.setState({ recipes: res.data });
      })
      .catch(err => {
          console.log(err);
      });
  }

  updateMenuState(_state){
    this.setState(_state);
    console.log(_state);
  }

  //コンポーネントが呼ばれた初回に起動
  componentDidMount() {
    this.getRecipes();
  }

  render() {
    switch(this.state.activeItem){
      case SystemConst.MENU_ITEM_0:
        this.message = <p>{this.state.searchKeyword}画面はまだ工事中です。</p>;
        break;
      case SystemConst.MENU_ITEM_1:
        this.message = <CreateRecipeCard />
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
      <Grid.Column width={3}> 
        <MenuVertical updateMenuState={this.updateMenuState.bind(this)} />
      </Grid.Column>
      <Grid.Column stretched width={13}>
        <Header as="h1">{this.state.activeItem}</Header>
        {this.message}        
      </Grid.Column>
      </Grid>
    );
  }
}

export default App;