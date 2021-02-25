import React, { Component }  from 'react';
import axios from 'axios';
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

const options = [
    { key: '大匙', text: '大匙', value: '大匙' },
    { key: '小匙', text: '小匙', value: '小匙' },
    { key: 'cc', text: 'cc', value: 'cc' },
    { key: 'L', text: 'L', value: 'L' },
    { key: 'g', text: 'g', value: 'g' },
  ]

export default class CreateRecipeCard extends Component {
      
    constructor(props) {
        super(props);
        this.props.updateMenuState(this.state);
      }
    
    state = {
        name:'',
        usersId:'',
        // secondCard:''
        previewRecipes:[{
            id:0,
            ingredientId:[],
            name:"",
            step:[],
            unit:"cc",
            usersId:1
        }],
    };

    // handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleChange = (e, { name, value }) => {
        this.state.previewRecipes[0][name] = value;
        this.setState(this.state);
        this.props.updateMenuState(this.state);
        console.log(this.state.previewRecipes)
    }  
    url = SystemConst.ServerUrl+SystemConst.SeachDir

    handleSubmit = () => {
        const { name, usersId } = this.state
        this.setState({ submittedName: name, submittedUserId: usersId })
      }    
    
    addIngredient = () => {
        let recipe = this.state.previewRecipes[0];
        recipe.ingredientId.push({
            ingredientId:recipe.ingredientId.length,
            name:recipe.ingredientName,
            quantity:recipe.quantity + recipe.unit,
        })
    }

    addStep = () => {
        let recipe = this.state.previewRecipes[0];
        recipe.step.push({
            stepId:recipe.step.length,
            stepText:recipe.stepText
        })
    }

    createRecipe = () => {
        axios.defaults.baseURL = SystemConst.ServerUrl;
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

        console.log(this.state.previewRecipes[0]);
        let recipeId=null;
        // レシピ登録
        axios.post(SystemConst.SeachDir+"/", this.state.previewRecipes[0])
        .then(res => {
            console.log(res);
            console.log(res.data.id);
            recipeId=res.data.id;

            console.log(this.state.previewRecipes[0]);
            //　ステップズ登録
            this.state.previewRecipes[0].step.forEach(step => {
                axios.post("api/step/",{
                    id:step.stepId,
                    text:step.stepText    
                })
                .then(res => {
                    console.log(res);
                    step.stepId =res.data.id
                //　ステップ登録
                axios.post("api/steps/",{
                        recipeId:recipeId,
                        stepId:step.stepId
                    })
                    .then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                        return;
                    });                            
                }).catch(err => {
                    console.log(err);
                    return;
                });                        
            });    

        }).catch(err => {
            console.log(err);
        });    

    }

    render() {
        return(
            <div>
                <label>レシピ名</label>
                <Input 
                placeholder='レシピ名'
                name="name"
                onChange={this.handleChange}
                />
                <label>材料</label>
                <Input 
                    name="ingredientName"
                    onChange={this.handleChange}
                    placeholder='材料名' />
                <Input 
                    name="quantity"
                    onChange={this.handleChange}
                    placeholder='分量' />
                <Dropdown
                name="quantityTani"
                onChange={this.handleChange}
                button basic floating
                defaultValue='cc' options={options}>
                </Dropdown>
                <Button　onClick={this.addIngredient}>追加</Button>
                <Input 
                    name="stepText"
                    onChange={this.handleChange}
                    placeholder='作り方'/>
                <Button onClick={this.addStep}>追加</Button>
                {/* <Button type='submit'>確認</Button> */}
                <Button onClick={this.createRecipe}>レシピ作成</Button>
            </div>


        )
    }
}
