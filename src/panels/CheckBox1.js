import React from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { List, Alert } from '@vkontakte/vkui';
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox'
import Slider2 from './Slider2';

class Checkbox1 extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        showSlider : false
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
          
                <Cell before = {'Зaкрепить запись?'}>
                <Checkbox
                id='checkbox1'
                value = {Boolean(this.state.showSlider)}
                onChange={showSlider => (this.setState({showSlider : !this.state.showSlider}))}
                />
                
                </Cell>
      {this.state.showSlider? <Slider2/> : null}
        </Div>
      );
    }
  }

  export default Checkbox1