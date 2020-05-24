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
    options() {
        let options = [];
        for (let i = 0; i <= 10; i += 2) {
            options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
        }
        return options;
    }
    
    getRandomAnime()
    {
        var unirest = require("unirest");

var req = unirest("POST", "https://genword.ru/generators/anime/new/");

req.headers({
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'x-requested-with': 'XMLHttpRequest'
});

req.form({});

req.end(function (res) {

    console.log(res.body);
    
});
        /*
        axios({
            method: 'post',
            url: '/register',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }
        }
        })
        .then(function (response) {
            console.log()
        })
        .catch(function (response) {
            //handle error
        });
          */
/*
https://genword.ru/generators/anime/new?accept-language:ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7&x-requested-with:XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://genword.ru/generators/anime/new/');
        xhr.send("accept-language:  \nx-requested-with: XMLHttpRequest");
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