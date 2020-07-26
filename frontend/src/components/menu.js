/**
 * 
 */
import React, { Component } from 'react'
import SystemConst from '../Const';
import { Menu,Input } from 'semantic-ui-react'

export default class MenuVertical extends Component {
  state = { }

  constructor(props) {
    super(props);
    this.state = { activeItem: 'レシピを投稿する' }
    this.props.updateMenuState(this.state);
  }

  handleItemClick = (e, { name }) => {
    //setStateを実行することでrenderを実行するリクエストをします。
    this.setState({ activeItem: name })
    this.props.updateMenuState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state
    return (
    <Menu pointing secondary vertical>
        <Menu.Item>
            <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='レシピの検索'
            />
        </Menu.Item>  
        <Menu.Item
          name={SystemConst.MENU_ITEM_1}
          active={activeItem === SystemConst.MENU_ITEM_1}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={SystemConst.MENU_ITEM_2}
          active={activeItem === SystemConst.MENU_ITEM_2}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={SystemConst.MENU_ITEM_3}
          active={activeItem === SystemConst.MENU_ITEM_3}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name={SystemConst.MENU_ITEM_4}
          active={activeItem === SystemConst.MENU_ITEM_4}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}