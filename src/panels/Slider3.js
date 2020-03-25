import React from 'react';
import PropTypes, { object, element } from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderSimple from '@vkontakte/vkui/dist/components/PanelHeaderSimple/PanelHeaderSimple';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
// eslint-disable-next-line
import persik from '../img/persik.png';
import './Persik.css';
import PanelHeaderClose  from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import { List, Alert } from '@vkontakte/vkui';
import Slider from '@vkontakte/vkui/dist/components/Slider/Slider';
import Select from '@vkontakte/vkui/dist/components/Select/Select';


class Slider3 extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        value1: 1,
      };
    }
    

     s = () => this.state.value1;
    options () {
      let options = [];
      for (let i = 0; i <= 10; i += 2) {
        options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
      }
      return options;
    }

    render() {
      return (
        <Div>
          <Cell before = {'Число постов: '} >
              <Input 
              disabled
              id='input3'
              min={1}
              max={5} value={Number(this.state.value1)} onChange={e => this.setState({ value1: e.target.value })} type="number"/>
            </Cell>
              <Slider
              align="right" 
              step={1}
              min={1}
              max={5}
              value={Number(this.state.value1)}
              onChange={value1 => this.setState({value1})}
              />
              
            <p id='footer' align="center" > Скидки на оптовые покупки</p>
        </Div>
      );
    }
  }

  export default Slider3