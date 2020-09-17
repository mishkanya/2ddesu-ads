import React from 'react';
import { Div } from '@vkontakte/vkui';
class CharacterGeneratorPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state =
        {
        };
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
            <iframe src="https://tools.seo-zona.ru/anime" width="100%" height="800" frameBorder="0"/>
        );
    }
}

export default CharacterGeneratorPanel