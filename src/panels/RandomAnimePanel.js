import React from 'react';
import {Spinner, Button, Header, Div } from '@vkontakte/vkui';
//const axios = require('axios').default;
import axios from "axios";

class RandomAnimePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state =
        {
            animeInfo: <Header>Эта функция недоступна...</Header>,
            debug:"dont work..."
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
    
    getRandomAnime()
    {
        const instance = axios.create({
            headers:
            {
                'baseURL': '/generators/anime/new/ HTTP/1.1',
                "accept-language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "x-requested-with":"XMLHttpRequest",
                "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          instance.post('https://genword.ru/generators/anime/new/')
          
        /*axios.post('https://genword.ru/generators/anime/new/', {form : "", 
        headers:
        {
            "accept-language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "x-requested-with":"XMLHttpRequest",
            "Host":"genword.ru",
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": 0
        }})*/
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({debug: res});
        });
/*
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://genword.ru/generators/anime/new/');
        xhr.send("accept-language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7 \nx-requested-with: XMLHttpRequest");
        */
    }

    render() {
        return (
            <Div>
                {this.state.animeInfo}
                <Button onClick={e => this.getRandomAnime()}>Get Random Anime</Button>
                {this.state.debug}
            </Div>
        );
    }
}

export default RandomAnimePanel