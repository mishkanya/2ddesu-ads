import React from 'react';
import {Spinner, Button, Header, Div } from '@vkontakte/vkui';
const axios = require('axios').default;

class RandomAnimePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state =
        {
            animeInfo: <Header>Эта функция недоступна...</Header>
        };
    }
    componentWillMount()
    {
        axios.post(this.props.quote_service_url, 
            {'quote': this.state.quote})
        .then(r => console.log(r))
        .catch(e => console.log(e));
    }
    options() {
        let options = [];
        for (let i = 0; i <= 10; i += 2) {
            options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
        }
        return options;
    }
    
    getRandomAnime(){

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

export default RandomAnimePanel