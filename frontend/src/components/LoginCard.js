import React, { Component }  from 'react';
import { Button, Card } from 'semantic-ui-react'

export default class LoginCard extends Component {

    LOGIN = 'login';
    CREATEACCOUNT = 'createAccount';

    state = {
        secondCard:''
    };

    handleItemClick = (e, { name }) => {
        console.log(name);
        switch(name){
            case this.LOGIN:
                this.setState({
                    secondCard:
                        <Card>
                        <Card.Content>
                            <Card.Header>ユーザー名とPWを打ってほしいです</Card.Header>
                            <Card.Description>が、まだ作成中でした。</Card.Description>
                        </Card.Content>
                        </Card>
                });
                break;
            case this.CREATEACCOUNT:
                this.setState({
                    secondCard:
                        <Card>
                        <Card.Content>
                            <Card.Header>希望のユーザ名とPWを打ってほしいのです</Card.Header>
                            <Card.Description>が、まだ作成中でした。</Card.Description>
                        </Card.Content>
                        </Card>
                    });
                break;
            default:
            //   this.message = this.state.activeItem + " 画面はまだ工事中です。 ";
              break;
          }
      
    };
    
    render() {
        return(
        <Card.Group>
            {this.state.secondCard}
            <Card>
            <Card.Content>
                <Card.Header>こんにちはゲストさん</Card.Header>
                <Card.Description>
                もしかして既にユーザをお持ちですか？
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='green'
                    name = {this.LOGIN}
                    onClick ={this.handleItemClick}
                >
                    ログイン
                </Button>
                <Button basic color='red'
                    name = {this.CREATEACCOUNT}
                    onClick ={this.handleItemClick}
                >
                    アカウント作成
                </Button>
                </div>
            </Card.Content>
            </Card>
        </Card.Group>
        )
    }
}