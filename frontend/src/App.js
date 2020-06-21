import React, { Component } from 'react';
// import './App.css';
// import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import { Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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
      <div>
        {
        this.state.recipes.map( recipe=> {
          return <Message>
          <Message.Header>{recipe.name}</Message.Header>
          <Message.List>
            <Message.Item>'IngredientsId'{recipe.IngredientsId}</Message.Item>
            <Message.Item>'stepId'{recipe.stepId}</Message.Item>
            <Message.Item>'userId'{recipe.userId}</Message.Item>
            <Message.Item>'status'{recipe.status}</Message.Item>
          </Message.List>
          </Message>
        })
        }
      </div>
    // <div>
    //   {
    //     this.state.recipes.map( recipe => {
    //         return <div className="recipe" key={recipe.id}>
    //           <h1>{recipe.name}</h1>
    //           <p>'id'{recipe.id}</p>
    //           <p>'IngredientsId'{recipe.IngredientsId}</p>
    //           <p>'stepId'{recipe.stepId}</p>
    //           <p>'userId'{recipe.userId}</p>
    //           <p>'status'{recipe.status}</p>
    //         </div>
    //     })
    //   }
    // </div>
      // <div className="App">
      //   <div className="recipes">
      //   </div>
      // </div>
    );
  }
}

export default App;