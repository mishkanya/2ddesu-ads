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
import persik from '../img/persik.png';
import './Persik.css';



//<PanelHeaderSimple left={<p><Link href = 'https://vk.com/2ddesu_world'>2Ddesu</Link></p>} ></PanelHeaderSimple>


const PCPay = ({ price}) => (
	
<Div><Group align="center" ><p className = 'PCPAY'>{price}</p></Group></Div>
		
);
PCPay.propTypes = {
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

export default PCPay;
