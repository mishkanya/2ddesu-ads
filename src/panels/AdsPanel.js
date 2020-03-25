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
import { objectOf, elementType, element, string } from 'prop-types';
import Input from '@vkontakte/vkui/dist/components/Input/Input';

import bridge from '@vkontakte/vk-bridge';
import { platform, IOS } from '@vkontakte/vkui';
import PCPay from './PCPay';

import copy from 'copy-to-clipboard';

const osName = platform();

class AdsPanel extends React.Component {

    
    constructor (props) {
      super(props);
      var s;
      this.state = {
        res : '',
        input3 : 1
      };
    }
    
    options () {
      let options = [];
      for (let i = 0; i <= 10; i += 2) {
        options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
      }
      return options;
    }
    
    calculate()
    {
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
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
        //var randomID = getRandomArbitrary(100000000,900000000)
        var Message = "Часов в ленте: " + first + (second == 0? '' : '\nЗапись будет закреплена: ' + second ) + '\nКоличество постов: ' + third +'\nОбщая стоимость: ' + Math.round(res);
        //bridge.send("VKWebAppCopyText", {text: Message}); 
        copy(Message);
 
        //return 'За рекламу вы заплатите:'+ res;
    }
    render() {
      return (
        <Div>
            <Slider1 />
            <Checkbox1/>
            <Slider3/>
            <p id='footer' align="center" > Скидки на оптовые покупки</p>
      <Group align="center" > <Button target="_blank" href="https://vk.me/2ddesu_world"  onClick={()=> (this.calculate())}>Заказать рекламу</Button></Group>
      </Div>
      );
    }
  }

  export default AdsPanel