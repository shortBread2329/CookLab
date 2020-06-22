import React, { Component }  from 'react';
import axios from 'axios';
import recipeMessage from './components/recipeMessage';
import MenuVertical from './components/menu';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    recipes:[]
  }

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

  //コンポーネントが呼ばれた初回に起動
  componentDidMount() {
    this.getRecipes();
  }

  render() {
    return (
      // recipeMessage(this.state.recipes)
      <MenuVertical />
    )
  }
}

export default App;