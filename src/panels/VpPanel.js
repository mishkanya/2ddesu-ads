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
import { List, Slider, Alert } from '@vkontakte/vkui';



const MainScene = ({ id, go, fetchedUser }) => (
	
	<Panel id={id} separator={false}>
		<PanelHeaderSimple left={<PanelHeaderClose />}>
			<p>pay ads</p>
		</PanelHeaderSimple>
		<Group title="stats"> 
		<List>
			<Cell before = {'Часов в ленте: '}>
				<Slider
				disabled
				id={'slider1'} 
				align="right" 
				step={1}
                min={6}
				max={24}
			/>
			</Cell>
			<Cell >qq</Cell>
		</List>
		</Group>
		
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
