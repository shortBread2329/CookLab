import React, { Component }  from 'react';
import {
  Message,
  Button,
  Form,
  Input,
  TextArea,
  Card,
  Dropdown,
} from 'semantic-ui-react'
import SystemConst from '../Const';

export default class PreviewRecipe extends Component {

      
    state = {
        name:'',
        usersId:'',
        // secondCard:''
    };

    // handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
        console.log(this.state)
    }  
    url = SystemConst.ServerUrl+SystemConst.SeachDir

    handleSubmit = () => {
        const { name, usersId } = this.state
        this.setState({ submittedName: name, submittedUserId: usersId })
      }    

    render() {
        return(
            <RecipeMessage recipes={this.state.previewRecipes} />
        )
    }
}
