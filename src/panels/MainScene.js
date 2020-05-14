import React from 'react';
import PropTypes, { object, element } from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import './Persik.css';
import PanelHeaderClose  from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import { List, Slider, Alert, Card } from '@vkontakte/vkui';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer';
import Icon24Message from '@vkontakte/icons/dist/24/message';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import { PanelHeaderBack } from '@vkontakte/vkui';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import bridge from '@vkontakte/vk-bridge';

import AdsPanel from './AdsPanel';
import VPPanel from './VpPanel';
import PayInfo from './PayInfo';
import Stickers from './Stickers';
import Help from './Help';


//#region icons
import Icon24Work from '@vkontakte/icons/dist/24/work';
import Icon24MarketOutline from '@vkontakte/icons/dist/24/market_outline';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Note from '@vkontakte/icons/dist/24/note';
//#endregion


class MainScene extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          userInfo : "",
          activeView: 'mainMenu',
        }
      }

      getUserName(){
        try
        {
          return this.state.userInfo.first_name;
        }
        catch{
          return "милый подписчик";
        }
      }
      
    
      render() {
        
        {bridge.send("VKWebAppGetUserInfo", {}).then(user_data => {
          this.setState({userInfo : user_data});
        })};
        return (
          <Root activeView={this.state.activeView}>
            <View activePanel="panel1.1" id="Ads">
              <Panel id="panel1.1">
                <PanelHeader left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'mainMenu' }) } />}>
                  <Link  target="_blank" href = 'https://vk.com/club143313662' className = 'header'></Link> 
                </PanelHeader>
                <AdsPanel />
		          </Panel>
            </View>


            <View header activePanel="panel2.1" id="Vp">
              <Panel id="panel2.1">
                <PanelHeader left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'mainMenu' }) } />}>
                  <Link target="_blank" href = 'https://vk.com/club143313662' className = 'header'>Сотрудничество</Link> 
                </PanelHeader>
                <VPPanel />
              </Panel>
            </View>


            <View header activePanel="panel3.1" id="Pay">
              <Panel id="panel3.1">
                <PanelHeader left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'mainMenu' }) } />}>
                  <Link target="_blank" href = 'https://vk.com/club143313662' className = 'header'>Реквизиты</Link> 
                </PanelHeader>
                <PayInfo />
              </Panel>
            </View>


            <View header activePanel="panel4.1" id="stickers">
              <Panel id="panel4.1">
                <PanelHeader  left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'mainMenu' }) } />}><div className = 'header'>Стикеры группы</div></PanelHeader>
                <Stickers/>
              </Panel>
            </View>


            <View header activePanel="panel5.1" id="mainMenu">
              <Panel id="panel5.1">
                <PanelHeader >
                  <Link align="center" target="_blank" href = 'https://vk.com/club143313662' className = 'header'>2Ddesu App</Link> 
                </PanelHeader>

                <Group>
                  <Card  mode="tint">
                    <Cell align="center">
                      <Div><Avatar src={this.state.userInfo.photo_200} size={80}/> Привет {this.getUserName()}! Мы ждали тебя:3 </Div>
                    </Cell>
                  </Card>
                </Group>
                

                <Group align="center" >
                  <Div >
                    <Button before={<Icon24MarketOutline/>} onClick={ () => this.setState({ activeView: 'Ads' }) } mode="tertiary " size="l" style={{ marginRight: 8 }}>Заказать рекламу</Button>
                    <Button before={<Icon24Work/>} onClick={ () => this.setState({ activeView: 'Vp' }) } mode="tertiary" size="l" >Сотрудничество</Button>
                  </Div>
                  </Group>
                  <Group align="center">
                    <Div><Button before={<Icon24Gift/>} mode="commerce" size="l" onClick={ () => this.setState({ activeView: 'stickers' }) }>Стикеры группы</Button></Div>
                    <Div><Button before={<Icon24Note/>} size="l" onClick={ () => this.setState({ activeView: 'Pay' }) }>Реквизиты</Button></Div>
                  </Group>
                <Group align="center" ><Footer><Button before={<Icon24Help/>} onClick={ () => this.setState({ activeView: 'help' }) } mode="tertiary " size="l" >Помощь</Button></Footer></Group>
               </Panel>
            </View>

            
            <View header activePanel="panel6.1" id="help">
              <Panel id="panel6.1">
                <PanelHeader left={<PanelHeaderBack onClick={ () => this.setState({ activeView: 'mainMenu' }) } />}>Помощь</PanelHeader>
                <Help/>
              </Panel>
            </View>
          </Root>
        )
      }
    }

  export default MainScene