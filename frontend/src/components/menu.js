/**
 * 
 */
import React, { Component } from 'react'
import SystemConst from '../Const';
import { Menu,Input,Label,Icon,Accordion } from 'semantic-ui-react'
import CreateRecipeCard from './CreateRecipeCard';
import axios from 'axios';

export default class MenuVertical extends Component {
  state = { 
    // activeItem: SystemConst.MENU_ITEM_2,
    activeItem: SystemConst.MENU_ITEM_1,
    searchKeyword:'' }

  constructor(props) {
    super(props);
    this.props.updateMenuState(this.state);
  }

  //メニューItemがクリックされることをトリガーとするメソッド
  handleItemClick = (e, { name }) => {
    let state = {activeItem: name};
    //setStateを実行することでrenderを実行するリクエストをします。
    this.setState(state);
    this.props.updateMenuState(state);
  };

  getRecipes(paramState = []) {
    axios.defaults.baseURL = SystemConst.ServerUrl;
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios
      .get(SystemConst.SeachDir + "?name=" + this.state.searchKeyword )
      .then(res => {
        paramState.recipes = res.data;
        this.setState(paramState);
        this.props.updateMenuState(this.state);
      })
      .catch(err => {
          console.log(err);
      });
  }

  search = (e, { name, value })  => {
    let state = { 
      activeItem: name,
      searchKeyword:value,
      recipes:[]
    };
    this.setState(state);
  }

  searchStart = (e) =>{
    console.log("Enter" + e)
    this.props.updateMenuState(this.state);
    this.getRecipes(this.state);  
  }

  render() {
    const { activeItem } = this.state;
    return (
      // <Menu pointing secondary vertical>
    <Menu secondary vertical as={Accordion} tabular='right'>
      <Menu.Item onClick={this.handleItemClick}>
        <Input
          icon={<Icon name='search' circular link onClick={this.searchStart}/>}
          placeholder="レシピ検索"
          value={this.state.searchKeyword}
          name={SystemConst.MENU_ITEM_0}
          onChange={this.search}
          onKeyPress={this.searchStart}
          />
      </Menu.Item>  
      <Menu.Item
        name={SystemConst.MENU_ITEM_1}
        active={activeItem === SystemConst.MENU_ITEM_1}
        onClick={this.handleItemClick}>        
        <Accordion.Title content={SystemConst.MENU_ITEM_1}/>
        <Accordion.Content 
          active={activeItem === SystemConst.MENU_ITEM_1} 
          content={<CreateRecipeCard 
            updateMenuState={this.props.updateMenuState.bind(this)} 
            getRecipes={this.getRecipes.bind(this)} 
            />} />
      </Menu.Item>
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
      <Menu.Item
        name={SystemConst.MENU_ITEM_5}
        active={activeItem === SystemConst.MENU_ITEM_5}
        onClick={this.handleItemClick}
      >
        {SystemConst.MENU_ITEM_5}
        <Label color='teal'>1</Label>
      </Menu.Item>
    </Menu>
    );
  }
}