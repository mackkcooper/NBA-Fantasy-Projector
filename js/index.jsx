import React from 'react';
import ReactDOM from 'react-dom';
import { arrayOf } from 'prop-types';

class Roster extends React.Component {
    constructor() {
        this.playerroster = new Object();
    }

    addPlayer(playername, playerid) {
        this.playerroster[playerid] = playername;
    }

    renderTableData() {
        return this.
    }

    render() {
        for(var key in this.playerroster)
        return (
            <table id="rostertable">
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
        );
    }
}

document.getElementById('addplayerbutton').onclick() {
    Roster.addPlayer('Player Name');
    ReactDOM.render(
        Roster.render,
        document.getElementById('roster')
    );
}