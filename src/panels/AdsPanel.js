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
        var res = (first * 5 + second * 5) * third ;
        //var token = "";
        //bridge.send("VKWebAppGetAuthToken", {"app_id": 7367088, "scope": "friends "});
        //bridge.subscribe((e) => (token = e));
        var randomID = getRandomArbitrary(100000000,900000000)
        //bridge.send("VKWebAppCallAPIMethod", {"method": "messages.send", "request_id": "11111", "params": {"user_id": "372864591","random_id": randomID,"peer_id" : "1850123234513","message": 'test',"dont_parse_links":"0","disable_mentions" : "0", "v":"5.103", "access_token":token}});
        bridge.send("VKWebAppCopyText", {text: "Часов в ленте: " + first + (second == 0? '' : '\nЗапись будет закреплена: ' + second ) + '\nКоличество постов' + third +"\nОбщая стоимость: " + res});

        bridge.subscribe((e) => (console.log(e)));
        return 'За рекламу вы заплатите:'+ res;
    }
    send(){
      //if(((osName !== ANDROID) && (osName !== IOS)))
      if(true)
      {
        return true
      }
      else{
        return false
      }
    }
    render() {
      return (
        <Div>
            <Group title="Время поста в ленте" > 
            <Slider1 />
            <Checkbox1/>
            </Group>
            <Slider3/>
      <Group align="center" > {this.send()? <Button target="_blank" href="https://vk.me/2ddesu_world"  onClick={()=> (console.log(this.calculate() ))}>Заказать рекламу</Button> : <Button onClick={()=> (console.log(this.calculate()))}>Подсчитать стоимость</Button>}</Group>
      </Div>
      );
    }
  }

  export default AdsPanel