import React from 'react';
import ReactDOM from 'react-dom';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { List, Alert, ANDROID } from '@vkontakte/vkui';
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox'
import Slider3 from './Slider3';
import Checkbox1 from './CheckBox1';
import Slider1 from './Slider1';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import { objectOf, elementType, element, string } from 'prop-types';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import bridge from '@vkontakte/vk-bridge';
import { platform, IOS } from '@vkontakte/vkui';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import copy from 'copy-to-clipboard';
import {Text} from '@vkontakte/vkui';
const osName = platform();

class AdsPanel extends React.Component {

    
    constructor (props) {
      super(props);
      var s;
      this.state = {
        res : '',
        input3 : 1,
        message: "Часов в ленте: 6 \nКоличество постов: 1 \nОбщая стоимость: 30",
        viewPrice: false
      };
    }
    setPrice = (e) => 
    {
      this.setState({ message: this.getPrice() });
    };
    
    getPrice()
    {
      var first = document.getElementById('input1').getAttribute('value');
        try
        {
          var second = Boolean(document.getElementById('checkbox1').getAttribute('value'))? document.getElementById('input2').getAttribute('value') : 0;
        }
        catch
        {
          var second = 0;
        }
        var third = document.getElementById('input3').getAttribute('value');
        var res = (first * 5 + second * 5) * (1.05 - third * 0.05) * third;
        var Message = "Часов в ленте: " + first + (second == 0? '' : '\nЗапись будет закреплена: ' + second ) + '\nКоличество постов: ' + third +'\nОбщая стоимость: ' + Math.round(res);
        return Message;
    }
         
    render() 
    {
      return (
        <Div>
          <CellButton align="center" target="_blank" href = 'https://vk.com/stats?gid=143313662' size="xl" mode="outline">Статистика</CellButton>
          <Card mode="outline"><Slider1 setPrice={this.setPrice} /></Card>
          <Card mode="outline"><Checkbox1 setPrice={this.setPrice}/></Card>
          <Card mode="outline"><Slider3 setPrice={this.setPrice}/></Card> 
          <Card align="center" size="l" mode="outline"><Div style={{ whiteSpace: "pre-line" }}>{this.state.message}</Div></Card> 
          <Group align="center" > <Button size="xl" target="_blank" href="https://vk.me/2ddesu_world"  onClick={()=> (this.getPrice() ,copy(this.getPrice))}>Заказать рекламу</Button></Group>
        </Div>
      );
    }
  }

  export default AdsPanel