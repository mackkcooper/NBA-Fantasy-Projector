
const NBA = require("nba");
//const curry = NBA.findPlayer('Stephen Curry');
//console.log(curry);
//const obj = NBA.stats.playerStats();

function get_firstName(str) { // retrieves the player's first name
    const player = NBA.findPlayer(str);
    console.log(player.firstName);
    return player.firstName;
}

function get_lastName(str) { // retrieves the player's last name
    const player = NBA.findPlayer(str);
    console.log(player.lastName);
    return player.lastName;
}

function get_fullName(str) { // retrieves the player's full name
    const player = NBA.findPlayer(str);
    console.log(player);
    return player.fullName;   
}

function get_teamName(str) { // retrieves the player's team name
    const player = NBA.findPlayer(str);
    NBA.stats.teamInfoCommon({TeamID: player.teamId})
        .then(team => {
            //console.log(team.teamInfoCommon[0].teamName);
            const tname = team.teamInfoCommon[0].teamName;
            //console.log(tname);
            return tname});
    //console.log(team);
    //return team.teamName;
}

function get_teamCity(str) { // retrieves the player's city name
    const player = NBA.findPlayer(str);
    NBA.stats.teamInfoCommon({TeamID: player.teamId})
        .then(team => {
            console.log(team.teamInfoCommon[0].teamCity);
            return team.teamInfoCommon[0].teamCity});
}

function get_draftYear(str) {
    const player = NBA.findPlayer(str);
    NBA.stats.playerInfo({PlayerID: player.playerId})
        .then(player => {
            //console.log(player.commonPlayerInfo[0].draftYear);
            return player.commonPlayerInfo[0].draftYear;
    });
}

function get_draftNumber(str) {
    const player = NBA.findPlayer(str);
    NBA.stats.playerInfo({PlayerID: player.playerId})
        .then(player => {
            //console.log(player.commonPlayerInfo[0].draftNumber);
            return player.commonPlayerInfo[0].draftNumber;
    });
}

function get_minutes(str) {
    draftYear = get_draftYear(str);
    draftNumber = get_draftNumber(str);
    console.log(draftYear);
    console.log(draftNumber);
    NBA.stats.playerStats({DraftYear: draftYear, DraftPick: draftNumber})
    .then(players => 
        console.log(players.leagueDashPlayerStats[0]));
}

function get_FG(str) {
    const player = NBA.findPlayer(str);
    NBA.stats.playerInfo({PlayerID: player.playerId}).then(console.log);
}

function get_FT(str) {

}

function get_3pm(str) {

}

function get_rebounds(str) {

}

function get_assists(str) {

}

function get_steals(str) {

}

function get_blocks(str) {

}

function get_turnovers(str) {

}

function get_points(str) {

}

function get_positions(str) {

}

// Tests
//fullname = get_fullName('Damian Lillard');
//console.log(fullname)
tname = get_teamName('Damian Lillard');
console.log(tname)
//get_teamCity('Damian Lillard');
//get_teamName('stephen Curry');
//city = get_teamCity('stephen Curry');
//console.log(city);
//get_minutes('Damian Lillard');
//get_draftInfo('Damian Lillard');

