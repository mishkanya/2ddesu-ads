import React from 'react';
import PropTypes, { object, element, number, string } from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import PanelHeaderClose  from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import { List, Alert, Card } from '@vkontakte/vkui';
import Slider from '@vkontakte/vkui/dist/components/Slider/Slider';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import './Persik.css';
import copy from 'copy-to-clipboard';

class VpPanel extends React.Component {

    constructor (props) 
    {
      super(props);

      this.state = {
        viwersSt: 100,
      };
    }

    options () 
    {
      let options = [];
      for (let i = 0; i <= 10; i += 2) {
        options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
      }
      return options;
    }

    regularVp()
    {
        var link = document.getElementById('StatsLink').getAttribute('value');
        var Message = 'Доброго времени суток, хочу предложить регулярное вп для!' + link? '\nВот ссылка на группу: ' + link: "";
        return Message;
    }
    viwerVp()
    {
        var link = document.getElementById('GroupLink').getAttribute('value');
        var vw = document.getElementById('viewers').getAttribute('value');
        var Message = "Доброго времени суток, хочу предложить разовое вп на " + vw + " просмотров!" + "\nВот ссылка на группу: " + link;
        return Message;
    }

    render() {
      return (
      <Div className='vpDiv'>
        <Group>
          <Card mode="outline">
            <Div>Если статистика вашей группы схожа с <Link target="_blank" href = 'https://vk.com/stats?gid=143313662'>нашей</Link>, мы можем договориться о регулярном вп</Div>
            <Group header={<Header mode="secondary">Ссылка на вашу статистику</Header>} ></Group>
            <Input placeholder="vk.com/stats?gid=" id='StatsLink' type='url'></Input>
            <Group align="center" > <Button size="xl" target="_blank" href="https://vk.me/2ddesu_world" onClick={()=> (copy(this.regularVp()))} >Написать </Button></Group>
          </Card>
        </Group>
        <Group>
          <Card mode="outline">
            <Div>Если статистика вашей группы хуже <Link target="_blank" href = 'https://vk.com/stats?gid=143313662'>нашей</Link>, мы можем договориться о разовом вп по охвату на записи</Div>
            <Group header={<Header mode="secondary">Ссылка на вашу группу</Header>} ></Group>
            <Input placeholder="vk.com/" id='GroupLink' type='url'></Input>

            <Group header={<Header mode="secondary">Число просмотров</Header>} ></Group>
            <Input type="number" value={this.state.viwersSt} onChange={e => (this.setState({viwersSt : e.target.value}))} id='viewers' min="100" max="3000" step={50}></Input>

            <Group align="center" > <Button size="xl" target="_blank" href="https://vk.me/2ddesu_world" onClick={()=> (copy(this.viwerVp()))} >Написать </Button></Group>
          </Card>
        </Group>
      </Div>
      );
    }
  }

  export default VpPanel