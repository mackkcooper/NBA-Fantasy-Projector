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
function get_team_name(team_id, player_obj, func) {
    NBA.stats.teamInfoCommon({TeamID: team_id}).then(
        result => {
            var city = result.teamInfoCommon[0].teamCity;
            var name = result.teamInfoCommon[0].teamName;
            func(city + " " + name, player_obj);
        }
    );
}
// Example: 
//var player_obj = {}
//get_team_name(get_player("Stephen Curry").teamId, player_obj, retrieve_var);
//console.log("Outside: ", player_obj);

// returns a json obj with all of the information of a player
function retrieve_player (player_name) {
    var curr_player = NBA.findPlayer(player_name);
    const player_id = curr_player.playerID;
    const team_id = curr_player.teamID
    var player = {
        "first_name" : get_firstName(player_id),
        "last_name"  : get_lastName(player_id),
        "full_name"  : get_fullName(player_id),
        "player_id"  : player_id,
        "team_id"    : team_id,
/*
        "team_name"  : get_team_name(curr_player.teamID, retrieve_var),
        "draft_year" : get_draftYear(curr_player.playerID, retrieve_var),
        "draft_pick" : get_draftNumber(curr_player.playerID, retrieve_var)
*/
    };
//    get_team_name (curr_player.teamID)

    //console.log(player);
    return player;
}
//Test
//player = retrieve_player ("Damian Lillard");
//console.log(player);

function retrieve_var (variable, player_obj) {
    player_obj['team_name'] = variable;
    console.log(player_obj);
}

// retrieves the player's first name
function get_firstName(player_id) { 
    const player = NBA.findPlayer(player_id);
    //console.log(player.firstName);
    return player.firstName;
}

// retrieves the player's last name
function get_lastName(player_id) { 
    const player = NBA.findPlayer(player_id);
    //console.log(player.lastName);
    return player.lastName;
}

// retrieves the player's full name
function get_fullName(player_id) { 
    const player = NBA.findPlayer(player_id);
    //console.log(player.fullname);
    return player.fullName;   
}

// retrieves the player's team name
function get_teamName(team_id) { 
    NBA.stats.teamInfoCommon({TeamID: team_id})
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
function get_teamCity(team_id) { 
    NBA.stats.teamInfoCommon({TeamID: team_id})
        .then(team => {
            console.log(team.teamInfoCommon[0].teamCity);
            return team.teamInfoCommon[0].teamCity});
}

// retrieves the draft year of the player
function get_draftYear(player_id, func) {
    NBA.stats.playerInfo({PlayerID: player_id})
        .then(player => {
            //console.log(player.commonPlayerInfo[0].draftYear);
            return func(player.commonPlayerInfo[0].draftYear)
    });
}

// retrieves the draft pick of the player
function get_draftNumber(player_id, func) {
    NBA.stats.playerInfo({PlayerID: player_id})
        .then(player => {
            //console.log(player.commonPlayerInfo[0].draftNumber);
            return func(player.commonPlayerInfo[0].draftNumber);
    });
}

// retrieves the average minutes per game of the player
function get_minutes(player_id, func) { 
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].min)
    );
}
//Tests
//var player = get_player("Stephen Curry");
//get_minutes(player.playerId, console.log);

// retrieves the field goal percentage of the player
function get_FG(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].fgPct)
    );
}

// retrieves the free throw percentage of the player
function get_FT(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].ftPct)
    );
}

// retrieves the number of threes made per game of the player
function get_3pm(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].fG3M)
    );
}

// retrieves the number of rebounds per game of the player
function get_rebounds(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].reb)
    );
}

// retrieves the number of assists per game of the player
function get_assists(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].ast)
    );
}

// retrieves the number of steals per game of the player
function get_steals(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].stl)
    );
}

// retrieves the number of blocks per game of the player
function get_blocks(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].blk)
    );
}

// retrieves the number of turnovers per game of the player
function get_turnovers(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].tov)
    );
}

// retrieves the number of points per game of the player
function get_points(player_id, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players.overallPlayerDashboard[0].pts)
    );
}

// retrieves the positions of the player
function get_positions(player_id, func) {

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