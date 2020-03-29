import React from 'react';
import PropTypes, { object, element, number } from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderSimple from '@vkontakte/vkui/dist/components/PanelHeaderSimple/PanelHeaderSimple';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import PanelHeaderClose  from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import { List, Alert } from '@vkontakte/vkui';
import Slider from '@vkontakte/vkui/dist/components/Slider/Slider';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import './Persik.css';
import copy from 'copy-to-clipboard';

class VpPanel extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
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
        var link = document.getElementById('StatsLink').getAttribute('value');
        //var randomID = getRandomArbitrary(100000000,900000000)
        var Message = 'Доброго времени суток, хочу предложить вп для @2ddesu_world. \nВот статистика группы: ' + link;
        copy(Message);
    }

    render() {
      return (
      <Div className='vpDiv'>
        Если статистика вашей группы схожа с <Link target="_blank" href = 'https://vk.com/stats?gid=143313662'>нашей</Link>, мы можем договориться о регулярном вп
        <Group header={<Header mode="secondary">Ссылка на вашу статистику</Header>} ></Group>
        <Input placeholder="vk.com/stats?gid=" id='StatsLink' type='url'></Input>
        <Group align="center" > <Button size="xl" target="_blank" href="https://vk.me/id534664876" onClick={()=> (this.calculate())} >Написать рекламному менеджеру</Button></Group>
	    </Div>
      );
    }
  }

  export default VpPanel