import React from 'react';
import {View, ScreenSpinner, Spinner, Button, Link, RichCell, Header, Div } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

class RandomAnime extends React.Component {

    constructor(props) {
        super(props);

        this.state =
        {
            popout: <ScreenSpinner/>,
            animeInfo: <Header>Эта функция недоступна...</Header>
        };
    }
    componentWillMount()
    {
        this.setState({popout: null});
    }
    options() {
        let options = [];
        for (let i = 0; i <= 10; i += 2) {
            options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
        }
        return options;
    }
   

    render() {
        return (
            <Div>
                {this.state.animeInfo}
                <Spinner/>
            </Div>
        );
    }
}

export default RandomAnime