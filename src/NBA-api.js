// import NBA API
const NBA = require("nba");

// gets a json of player stats by string player_name and returns that json
function get_player (player_name) {
    return NBA.findPlayer(player_name);
}

// get team name by team id
function get_team_name(team_id, player_obj) {
    NBA.stats.teamInfoCommon({TeamID: team_id}).then(
        result => {
            var city = result.teamInfoCommon[0].teamCity;
            var name = result.teamInfoCommon[0].teamName;
            player_obj["team_name"] = city + " " + name;
        }
    );
}

function get_player_stats (player_id, player_obj, func) {
    NBA.stats.playerSplits({PlayerID: player_id})
    .then(players => 
        func(players, player_obj)
    )
    .catch(error => {
        console.log('Request failed', error);
    });
}

// returns a json obj with all of the information of a player
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

    get_team_name (team_id, player);
    get_positions(player_id, player)
    get_player_stats (player_id, player, insert_stats);
    func(player);
}

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

// retrieves the positions of the player
function get_positions (player_id, player_obj) {
    NBA.stats.playerInfo({PlayerID: player_id})
        .then(player => {
            player_obj["position"] = player.commonPlayerInfo[0].position;
    })
    .catch(error => {
        console.log('Request failed', error);
    });
}