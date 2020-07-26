import React, { Component }  from 'react';
import SystemConst from './Const';
import { Grid } from 'semantic-ui-react'
import axios from 'axios';
import RecipeMessage from './components/RecipeMessage';
import MenuVertical from './components/menu';
import LoginCard from './components/LoginCard';
import CreateRecipeCard from './components/CreateRecipeCard';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
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

  updateMenuState(state){
    this.setState(state);
  }

  //コンポーネントが呼ばれた初回に起動
  componentDidMount() {
    this.getRecipes();
  }

  componentDidUpdate(prevProps) {
    // props.id が変更されたら再フェッチ
    if (this.props !== prevProps) {
    }
  }
  render() {
    switch(this.state.activeItem){
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
        this.message = this.state.activeItem + " 画面はまだ工事中です。 ";
        break;
    }

    return (
      <Grid>
      <Grid.Column width={3}> 
        <MenuVertical updateMenuState={this.updateMenuState.bind(this)} />
      </Grid.Column>
      <Grid.Column stretched width={13}>
      {/* <Grid.Column width={12}> */}
        {this.message}        
      </Grid.Column>
      </Grid>
    )
  }
}

export default App;