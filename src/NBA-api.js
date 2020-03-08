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
//console.log(player)

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
//get_team_name(get_player("Stephen Curry").teamId, console.log);

function my_player (player_name) {


}

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

// retrieves the draft year of the player
function get_draftYear(player_id, func) {
    NBA.stats.playerInfo({PlayerID: player_id})
        .then(player => {
            //console.log(player.commonPlayerInfo[0].draftYear);
            func(player.commonPlayerInfo[0].draftYear)
    });
}

// retrieves the draft pick of the player
function get_draftNumber(player_id, func) {
    NBA.stats.playerInfo({PlayerID: player_id})
        .then(player => {
            //console.log(player.commonPlayerInfo[0].draftNumber);
            func(player.commonPlayerInfo[0].draftNumber);
    });
}

// retrieves the average minutes per game of the player
function get_minutes(draft_year, draft_number, func) { 
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0])
    );
}
//Tests
//get_minutes(2019, 1, console.log)

// retrieves the field goal percentage of the player
function get_FG(str) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].fgPct)
    );
}

// retrieves the free throw percentage of the player
function get_FT(draft_year, draft_number, func) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].ftPct)
    );
}

// retrieves the number of threes made per game of the player
function get_3pm(draft_year, draft_number, func) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].fG3M)
    );
}

// retrieves the number of rebounds per game of the player
function get_rebounds(draft_year, draft_number, func) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].reb)
    );
}

// retrieves the number of assists per game of the player
function get_assists(draft_year, draft_number, func) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].ast)
    );
}

// retrieves the number of steals per game of the player
function get_steals(draft_year, draft_number, func) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].stl)
    );
}

// retrieves the number of blocks per game of the player
function get_blocks(draft_year, draft_number, func) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].blk)
    );
}

// retrieves the number of turnovers per game of the player
function get_turnovers(draft_year, draft_number, func) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].tov)
    );
}

// retrieves the number of points per game of the player
function get_points(draft_year, draft_number, func) {
    NBA.stats.playerStats({DraftYear: draft_year, DraftPick: draft_number})
    .then(players => 
        func(players.leagueDashPlayerStats[0].pts)
    );
}

// retrieves the positions of the player
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