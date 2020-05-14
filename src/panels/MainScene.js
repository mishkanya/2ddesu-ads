import React from 'react';
import {Div, Group, Button, Panel, PanelHeader, Cell, Avatar, Card, View, Root, Footer, PanelHeaderBack} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

//#region panels
import AdsPanel from './AdsPanel';
import VPPanel from './VpPanel';
import PayInfo from './PayInfo';
import Stickers from './Stickers';
import Help from './Help';
//#endregion

//#region icons
import Icon24Like from '@vkontakte/icons/dist/24/like';///сердечко
import Icon24Market from '@vkontakte/icons/dist/24/market';///реклама
import Icon24Work from '@vkontakte/icons/dist/24/work';///вп
import Icon24Gift from '@vkontakte/icons/dist/24/gift';///стикеры
import Icon24Note from '@vkontakte/icons/dist/24/note';///реквизиты
import Icon24Error from '@vkontakte/icons/dist/24/error';///помощь
//#endregion


class MainScene extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo: "",
      activeView: 'mainMenu',
    }
  }

  getUserName() {
    try {
      return this.state.userInfo.first_name;
    }
    catch{
      return "милый подписчик";
    }
  }


  render() {

    {
      bridge.send("VKWebAppGetUserInfo", {}).then(user_data => {
        this.setState({ userInfo: user_data });
      })
    };
    return (
      <Root activeView={this.state.activeView}>
        <View activePanel="panel1.1" id="Ads">
          <Panel id="panel1.1">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              {/*<Link  target="_blank" href = 'https://vk.com/club143313662' className = 'header'></Link>*/}
              <Button after={<Icon24Market width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Реклама</Button>
            </PanelHeader>
            <AdsPanel />
          </Panel>
        </View>


        <View header activePanel="panel2.1" id="Vp">
          <Panel id="panel2.1">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              {/*<Link target="_blank" href = 'https://vk.com/club143313662' className = 'header'>Сотрудничество</Link> */}
              <Button after={<Icon24Work width={20} height={20}/>} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662' >Сотрудничество</Button>
            </PanelHeader>
            <VPPanel />
          </Panel>
        </View>


        <View header activePanel="panel3.1" id="Pay">
          <Panel id="panel3.1">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              {/*<Link target="_blank" href = 'https://vk.com/club143313662' className = 'header'>Реквизиты</Link>*/}
              <Button after={<Icon24Note width={20} height={20}/>} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Реквизиты</Button>
            </PanelHeader>
            <PayInfo />
          </Panel>
        </View>


        <View header activePanel="panel4.1" id="stickers">
          <Panel id="panel4.1">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              {/*<div className = 'header'>Стикеры группы</div>*/}
              <Button after={<Icon24Gift width={20} height={20}/>} mode="tertiary" size="xl" target="_blank" href='https://vk.com/club143313662'>Стикеры группы</Button>
            </PanelHeader>
            <Stickers />
          </Panel>
        </View>


        <View header activePanel="panel5.1" id="mainMenu">
          <Panel id="panel5.1">
            <PanelHeader >
              {/*<Link align="center" target="_blank" href = 'https://vk.com/club143313662' className = 'header'>2DDesu App</Link>*/}
              <Button after={<Icon24Like width={20} height={20}/>} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>2DDesu App</Button>
            </PanelHeader>

            <Group>
              <Card mode="tint">
                <Cell align="center">
                  <Div><Avatar src={this.state.userInfo.photo_200} size={80} /> Привет {this.getUserName()}! Мы ждали тебя:3 </Div>
                </Cell>
              </Card>
            </Group>


            <Group align="center" >
              <Div >
                <Button before={<Icon24Market width={20} height={20}/>} onClick={() => this.setState({ activeView: 'Ads' })} mode="tertiary " size="l" style={{ marginRight: 8 }}>Заказать рекламу</Button>
                <Button before={<Icon24Work width={20} height={20}/>} onClick={() => this.setState({ activeView: 'Vp' })} mode="tertiary" size="l" >Сотрудничество</Button>
              </Div>
            </Group>
            <Group align="center">
              <Div><Button before={<Icon24Gift width={20} height={20}/>} mode="commerce" size="l" onClick={() => this.setState({ activeView: 'stickers' })}>Стикеры группы</Button></Div>
              <Div><Button before={<Icon24Note width={20} height={20}/>} size="l" onClick={() => this.setState({ activeView: 'Pay' })}>Реквизиты</Button></Div>
            </Group>
            <Group align="center" >
              <Button before={<Icon24Error width={20} height={20}/>} onClick={() => this.setState({ activeView: 'help' })} mode="tertiary " size="l" >Помощь</Button>
            </Group>
          </Panel>
        </View>


        <View header activePanel="panel6.1" id="help">
          <Panel id="panel6.1">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              {/*<PanelHeader left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'mainMenu' }) } />}>Помощь</PanelHeader>*/}
              <Button after={<Icon24Error width={20} height={20}/>} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Помощь</Button>
            </PanelHeader>
            <Help />
          </Panel>
        </View>
      </Root>
    )
  }
}

export default MainScene