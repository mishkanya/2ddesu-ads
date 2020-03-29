import React from 'react';
import PropTypes, { object, element, number } from 'prop-types';
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
import './Persik.css';
import PanelHeaderClose  from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import { List, Alert } from '@vkontakte/vkui';
import Slider from '@vkontakte/vkui/dist/components/Slider/Slider';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox'

class Slider2 extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        value2: 2,
      };
    }

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
          <Cell before = {'Часов в закрепе: '} >
            <Input 
              disabled
              id='input2'
              min={1}
              max={4} value={Number(this.state.value2)} onChange={e => this.setState({ value2: e.target.value })} type="number"/>
            </Cell>
              
            
              <Slider
              align="right" 
              step={1}
              min={1}
              max={4}
              value={Number(this.state.value2)}
              onChange={value2 => this.setState({value2})}
              />
        </Div>
      );
    }
  }

  export default Slider2