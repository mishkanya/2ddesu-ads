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
import Link  from '@vkontakte/vkui/dist/components/Link/Link';
import { List, Slider, Alert } from '@vkontakte/vkui';
import Slider1 from './Slider1';
import Checkbox1 from './CheckBox1';
import AdsPanel from './AdsPanel';
import bridge from '@vkontakte/vk-bridge';

import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { platform, IOS } from '@vkontakte/vkui';

//<PanelHeaderSimple left={<p><Link href = 'https://vk.com/2ddesu_world'>2Ddesu</Link></p>} ></PanelHeaderSimple>


const osName = platform();
const MainScene = ({ id, go, fetchedUser }) => (
	
	
	<Panel id={id} separator={false}>
		<PanelHeaderSimple >
			<p className = 'header' ><Link target="_blank" href = 'https://vk.com/2ddesu_world'>Покупка рекламы в 2Ddesu</Link></p>
		</PanelHeaderSimple>
		
		<Group id='statistic' align="center" title='Статистика группы'><Link target="_blank" href = 'https://vk.com/stats?gid=143313662'><p> Статистика </p></Link></Group>
		<AdsPanel/>
	</Panel>
);
MainScene.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default MainScene;
