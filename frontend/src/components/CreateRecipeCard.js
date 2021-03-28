import React, { Component }  from 'react';
import axios from 'axios';
import {
  Button,
  Input,
  Dropdown,
} from 'semantic-ui-react'
import SystemConst from '../Const';

export default class CreateRecipeCard extends Component {
      
    constructor(props) {
        super(props);
        this.props.updateMenuState(this.state);
        this.tesRef = React.createRef();
      }
    
    state = {
        name:'',
        usersId:'',
        // secondCard:''
        previewRecipes:[{
            image:'https://react.semantic-ui.com/images/wireframe/image.png',
            id:0,
            ingredient:[],
            name:"",
            step:[],
            unit:"cc",
            usersId:1
        }],
    };

    options = [
        { key: '大匙', text: '大匙', value: '大匙' },
        { key: '小匙', text: '小匙', value: '小匙' },
        { key: 'cc', text: 'cc', value: 'cc' },
        { key: 'L', text: 'L', value: 'L' },
        { key: 'g', text: 'g', value: 'g' },
        { key: '個', text: '個', value: '個' },
      ]
    
    // handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleChange = (e, { name, value }) => {
        let previewRecipes = this.state.previewRecipes.slice();
        previewRecipes[0][name] = value;
        this.setState({previewRecipes:previewRecipes})
        // this.state.previewRecipes[0][name] = value;
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
        recipe.ingredient.push({
            ingredientId:recipe.ingredient.length,
            name:recipe.ingredientName,
            quantity:recipe.quantity,
            unit:recipe.unit
        })
    }

    addStep = () => {
        let recipe = this.state.previewRecipes[0];
        recipe.step.push({
            stepId:recipe.step.length,
            stepText:recipe.stepText,
            stepNo:recipe.step.length+1,
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
            //　ステップ登録
            this.state.previewRecipes[0].step.forEach(step => {
                axios.post("api/step/",{
                    id:step.stepId,
                    text:step.stepText,
                })
                .then(res => {
                    console.log(res);
                    step.stepId =res.data.id
                //　ステップズ登録
                axios.post("api/steps/",{
                        recipeId:recipeId,
                        stepId:step.stepId,
                        stepNo:step.stepNo,
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

    // componentDidMount() {
    //     this.tesRef.current.focus();
    // }

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
                button basic
                // ref={this.tesRef}
                // ref={this.options}
                defaultValue='cc' 
                options={this.options}
                >
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
