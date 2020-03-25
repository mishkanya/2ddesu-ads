import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/AdPanel';
import Persik from './panels/Persik';
import Home2 from './panels/VpPanel';

const App = () => {
	var apiKey = null;
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		bridge.send("VKWebAppViewHide",{});
		console.log("i`m go");
		bridge.subscribe((e) => (console.log(e)));
	};

	return (
		<View activePanel={activePanel} popout={popout} header={false}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
		</View>
	);
}

export default App;

