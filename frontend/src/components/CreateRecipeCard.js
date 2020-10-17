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
        recipes:[{
                id:0,
                ingredientId:[],
                name:"",
                stepId:[],
            }]
    };

    // handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleChange = (e, { name, value }) => {
        this.state.recipes[0][name] = value;
        this.setState(this.state.recipes);
        this.props.updateMenuState(this.state);

        console.log(this.state.recipes)
    }  
    url = SystemConst.ServerUrl+SystemConst.SeachDir

    handleSubmit = () => {
        const { name, usersId } = this.state
        this.setState({ submittedName: name, submittedUserId: usersId })
      }    

    render() {
        const { name, email, submittedName, submittedEmail } = this.state
        return(
            // <Form success onSubmit={this.handleSubmit} method="POST" action={this.url} className='attached fluid segment'>
            <div>
                <label>レシピ名</label>
                <Input 
                placeholder='レシピ名'
                name="name"
                onChange={this.handleChange}
                />
                <label>材料</label>
                <Input placeholder='材料名' />
                <Input placeholder='分量' />
                <Dropdown
                button basic floating
                defaultValue='cc' options={options}>
                </Dropdown>
                <Button>追加</Button>
                <Input placeholder='作り方'/>
                <Button>追加</Button>
                {/* <Button type='submit'>確認</Button> */}
            </div>


        )
    }
}
