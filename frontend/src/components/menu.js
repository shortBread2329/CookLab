import React, { Component } from 'react'
import { Menu,Input,Button,Icon,Label,Grid,Segment } from 'semantic-ui-react'

export default class MenuVertical extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Grid>
    <Grid.Column width={4}>
    {/* <Menu pointing secondary vertical> */}
    <Menu text vertical>
        <Menu.Item>
            <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='レシピの検索'
            />
        </Menu.Item>
        <Menu.Item
          name='レシピを投稿する'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='今日のトレンド'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='設定'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='ゲストさん'
          active={activeItem === 'user'}
          onClick={this.handleItemClick}
        />
      </Menu>
    </Grid.Column>
    <Grid.Column stretched>
        {/* <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
        </Segment> */}
    </Grid.Column>
    </Grid>

    )
  }
}