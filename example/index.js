import {OEmbed}  from '../dist/index'
import React, {Component} from 'react'
import {render} from 'react-dom'

let node = document.getElementById('app');

class Example extends Component
{
    constructor()
    {
        super();
    }

    componentDidMount() {
        new OEmbed();
    }

    render()
    {

        return (
            <div>
            </div>
        );
    }
}

render(
<Example/>,
    node
);
