import React from 'react';
import {Div, Group, Button, Card} from '@vkontakte/vkui';
import copy from 'copy-to-clipboard';

//#region MyComponents
import Slider3 from './Slider3';
import Checkbox1 from './CheckBox1';
import Slider1 from './Slider1';
//#endregion

class AdsPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      res: '',
      input3: 1,
      message: "Часов в ленте: 6 \nКоличество постов: 1 \nОбщая стоимость: 30",
      viewPrice: false
    };
  }
  setPrice = () => {
    this.setState({ message: this.getPrice() });
  };

  getPrice() 
  {
    var first = document.getElementById('input1').getAttribute('value');
    try 
    {
      var second = Boolean(document.getElementById('checkbox1').getAttribute('value')) ? document.getElementById('input2').getAttribute('value') : 0;
    }
    catch
    {
      var second = 0;
    }
    var third = document.getElementById('input3').getAttribute('value');
    var res = (first * 5 + second * 5) * (1.05 - third * 0.05) * third;
    var Message = "Часов в ленте: " + first + (second == 0 ? '' : '\nЗапись будет закреплена: ' + second) + '\nКоличество постов: ' + third + '\nОбщая стоимость: ' + Math.round(res);
    return Message;
  }

  render() 
  {
    return (
      <Div>
        <Button mode="tertiary " align="center" target="_blank" href='https://vk.com/stats?gid=143313662' size="xl">Статистика</Button>
        <Group mode="outline"><Slider1 setPrice={this.setPrice} /></Group>
        <Group mode="outline"><Checkbox1 setPrice={this.setPrice} /></Group>
        <Group mode="outline"><Slider3 setPrice={this.setPrice} /></Group>
        <Card align="center" size="l" mode="outline"><Div style={{ whiteSpace: "pre-line" }}>{this.state.message}</Div></Card>
        <Group align="center" > <Button size="xl" target="_blank" href="https://vk.com/club143313662" onClick={() => (copy(this.getPrice))}>Заказать рекламу</Button></Group>
      </Div>
    );
  }
}

export default AdsPanel