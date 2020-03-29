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
import PanelHeaderSimple from '@vkontakte/vkui/dist/components/PanelHeaderSimple/PanelHeaderSimple';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
// eslint-disable-next-line
import './Persik.css';
import PanelHeaderClose  from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import { List, Slider, Alert, Card } from '@vkontakte/vkui';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer';
import Icon24Message from '@vkontakte/icons/dist/24/message';
import Link from '@vkontakte/vkui/dist/components/Link/Link';

import AdsPanel from './AdsPanel';
import VPPanel from './VpPanel';
import PayInfo from './PayInfo';

class MainScene extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          activeView: 'Ads'
        }
      }
      
    
      render() {
        return (
          <Root activeView={this.state.activeView}>
            <View activePanel="panel1.1" id="Ads">
              <Panel id="panel1.1">
              <PanelHeader ><Link target="_blank" href = 'https://vk.com/2ddesu_world' className = 'header'>Покупка рекламы в 2Ddesu</Link> </PanelHeader>
               <AdsPanel />
                
                <Footer>
                  <Card mode="shadow">
                    <Div>
                      <Button size="l" mode="tertiary" level="3" component="a" onClick={ () => this.setState({ activeView: 'Vp' }) }>Предложить ВП</Button>
                      <Button size="l" mode="tertiary" level="3" component="a" onClick={ () => this.setState({ activeView: 'Pay' }) }>Реквизиты</Button>
                    </Div>
                  </Card>
                </Footer>
              
		        </Panel>
            </View>
            <View header activePanel="panel2.1" id="Vp">
              <Panel id="panel2.1">
                <PanelHeader ><Link target="_blank" href = 'https://vk.com/2ddesu_world' className = 'header'>Предложение о ВП</Link> </PanelHeader>
                <VPPanel />
                <Footer>
                  <Card mode="shadow">
                    <Div>
                      <Button size="l" mode="tertiary" level="3" component="a" onClick={ () => this.setState({ activeView: 'Ads' }) }>Купить рекламу</Button>
                      <Button size="l" mode="tertiary" level="3" component="a" onClick={ () => this.setState({ activeView: 'Pay' }) }>Реквизиты</Button>
                    </Div>
                  </Card>
              </Footer>
              </Panel>
            </View>
            <View header activePanel="panel3.1" id="Pay">
              <Panel id="panel3.1">
              <PanelHeader ><Link target="_blank" href = 'https://vk.com/2ddesu_world' className = 'header'>Реквизиты</Link> </PanelHeader>
                <PayInfo />
                <Footer>
                  <Card mode="shadow">
                    <Div>
                      <Button size="l" mode="tertiary" level="3" component="a" onClick={ () => this.setState({ activeView: 'Ads' }) }>Купить рекламу</Button>
                      <Button size="l" mode="tertiary" level="3" component="a" onClick={ () => this.setState({ activeView: 'Vp' }) }>Предложить ВП</Button>
                    </Div>
                  </Card>
              </Footer>
              </Panel>
            </View>
          </Root>
        )
      }
    }

  export default MainScene