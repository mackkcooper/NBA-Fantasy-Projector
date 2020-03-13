// import NBA API
const NBA = require("nba");

// gets a json of player stats by string player_name and returns that json
function get_player (player_name) {
    return NBA.findPlayer(player_name);
}

// get team name by team id
// city is the city of the team that player plays for
// name is the name of the team that player plays for
function get_team_name(team_id, player_obj) {
    NBA.stats.teamInfoCommon({TeamID: team_id}).then(
        result => {
            // city is the city the team of the player plays for
            var city = result.teamInfoCommon[0].teamCity;
            var name = result.teamInfoCommon[0].teamName;
            player_obj["team_name"] = city + " " + name;
        }
    );
}

// with the player id, searchs for the stats in api and then passes
// json obj into the function in the argument that will then insert
// the stats into a new json object  
function get_player_stats (player_id, player_obj, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players, player_obj)
    )
    .catch(error => {
        console.log('Request failed', error);
    });
}

// creates a player object to insert all information of a player
// into, then adds basic information from findplayer into the player
// object. Calls helper functions to retrieve the remaining information
// to be stored in the player object. Then returns the player json
// object to be stored in a map later
function retrieve_player (player_name, func) {
    var curr_player = NBA.findPlayer(player_name);
    var player_id = curr_player.playerId;
    var team_id = curr_player.teamId;
    var player = {
        "first_name" : curr_player.firstName,
        "last_name"  : curr_player.lastName,
        "full_name"  : curr_player.fullName,
        "player_id"  : player_id,
        "team_id"    : team_id,
    };

//  helper functions
    get_team_name (team_id, player);
    get_positions(player_id, player)
    get_player_stats (player_id, player, insert_stats);
    func(player);
}

// This function takes in the json object from the api as source
// and the new player json object the destination and copies over
// the information from the source into the destination
function insert_stats (src_player, dest_player) {
    dest_player["mins"] = src_player.overallPlayerDashboard[0].min;
    dest_player["fg_pct"] = src_player.overallPlayerDashboard[0].fgPct;
    dest_player["ft_pct"] = src_player.overallPlayerDashboard[0].ftPct;
    dest_player["threes_pg"] = src_player.overallPlayerDashboard[0].fG3M;
    dest_player["rebs"] = src_player.overallPlayerDashboard[0].reb;
    dest_player["asts"] = src_player.overallPlayerDashboard[0].ast;
    dest_player["stls"] = src_player.overallPlayerDashboard[0].stl;
    dest_player["blks"] = src_player.overallPlayerDashboard[0].blk;
    dest_player["tovs"] = src_player.overallPlayerDashboard[0].tov;
    dest_player["pts"] = src_player.overallPlayerDashboard[0].pts;
}

// with the player id, searchs for the player's position in api and
// then inserts the postion into the player json object that will
// be used later in the map
function get_positions (player_id, player_obj) {
    NBA.stats.playerInfo({PlayerID: player_id})
        .then(player => {
            player_obj["position"] = player.commonPlayerInfo[0].position;
    })
    .catch(error => {
        console.log('Request failed', error);
    });
}