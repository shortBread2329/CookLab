import React, { Component }  from 'react';
import {
  Button,
  Form,
  Input,
  TextArea,
  Card,
} from 'semantic-ui-react'

export default class CreateRecipeCard extends Component {

    state = {
        // secondCard:''
    };

    handleItemClick = (e, { name }) => {
        console.log(name);
        switch(name){
            default:
            break;
          }
      
    };
    
    render() {
        return(
        <Card.Group>
            {this.state.secondCard}
            <Card>
            <Card.Content>
            <Form>
                <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    label='レシピ名'
                    placeholder='レシピ名'
                />
                </Form.Group>
                <Form.Field
                control={Input}
                label='材料'
                placeholder='材料名'
                />
                <Form.Field
                control={Input}
                placeholder='分量'
                />
                <Form.Field control={Button}>追加</Form.Field>
                <Form.Field
                control={TextArea}
                label='作り方'
                placeholder=''
                />
                <Form.Field control={Button}>確認</Form.Field>
            </Form>
            </Card.Content>
            </Card>
        </Card.Group>
        )
    }
}
