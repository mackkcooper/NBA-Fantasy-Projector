// import NBA API
const NBA = require("nba");
/*
EXAMPLE
===================
const curry = NBA.findPlayer('Stephen Curry');
console.log(curry);
const obj = NBA.stats.playerStats();
*/

// get player info json by player name
function get_player(player_name, func) {
    return NBA.findPlayer(player_name);
}
// Example: 
//var player = get_player("Stephen Curry");

// get team name by team id
function get_team_name(team_id, func) {
    NBA.stats.teamInfoCommon({TeamID: team_id}).then(
        result => {
            var city = result.teamInfoCommon[0].teamCity;
            var name = result.teamInfoCommon[0].teamName;
            func(city + " " + name);
        }
    );
}
// Example: 
// get_team_name(get_player("Stephen Curry").teamId, insert);


// retrieves the player's first name
function get_firstName(str) { 
    const player = NBA.findPlayer(str);
    console.log(player.firstName);
    return player.firstName;
}

// retrieves the player's last name
function get_lastName(str) { 
    const player = NBA.findPlayer(str);
    console.log(player.lastName);
    return player.lastName;
}

// retrieves the player's full name
function get_fullName(str) { 
    const player = NBA.findPlayer(str);
    console.log(player);
    return player.fullName;   
}

// retrieves the player's team name
function get_teamName(str) { 
    const player = NBA.findPlayer(str);
    NBA.stats.teamInfoCommon({TeamID: player.teamId})
        .then(team => {
            //console.log(team.teamInfoCommon[0].teamName);
            const tname = team.teamInfoCommon[0].teamName;
            //console.log(tname);
            return tname
        });
    //console.log(team);
    //return team.teamName;
}

// retrieves the player's city name
function get_teamCity(str) { 
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
//tname = get_teamName('Damian Lillard');
//console.log(tname)
//get_teamCity('Damian Lillard');
//get_teamName('stephen Curry');
//city = get_teamCity('stephen Curry');
//console.log(city);
//get_minutes('Damian Lillard');
//get_draftInfo('Damian Lillard');