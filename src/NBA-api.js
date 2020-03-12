// import NBA API
const NBA = require("nba");

// Example:
//retrieve_player("steph", console.log);

// returns a json obj with all of the information of a player
function retrieve_player(player_name, callback) {
  var player = NBA.findPlayer(player_name);
  if(player === undefined)
    return;
  var player_id = player.playerId;
  var team_id = player.teamId;
  var player_obj = {
    "first_name" : player.firstName,
    "last_name"  : player.lastName,
    "full_name"  : player.fullName,
    "player_id"  : player_id,
    "team_id"    : team_id,
  };
  get_team_name(player_obj, callback);
}

// get team name by team id
function get_team_name(player_obj, callback) {
  NBA.stats.teamInfoCommon({TeamID: player_obj.team_id})
  .then( result => {
    var city = result.teamInfoCommon[0].teamCity;
    var name = result.teamInfoCommon[0].teamName;
    player_obj["team_name"] = city + " " + name;
    return get_positions(player_obj, callback);
  }, error => errorHandler(error));
}

// retrieves the positions of the player
function get_positions(player_obj, callback) {
  //console.log(player_obj);
  NBA.stats.playerInfo({PlayerID: player_obj.player_id})
  .then( player => {
      player_obj["position"] = player.commonPlayerInfo[0].position;
      return get_player_stats(player_obj, callback);
  }, error => errorHandler(error));
}

function get_player_stats(player_obj, callback) {
  //console.log(player_obj);
  NBA.stats.playerSplits({PlayerID: player_obj.player_id})
  .then( players => {
    return insert_stats(players, player_obj, callback);
  }, error => errorHandler(error));
}

function insert_stats(src_player, dest_player, callback) {
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
  return callback(dest_player);
}

function errorHandler(error) {
  console.log('Request failed', error);
}

export {retrieve_player, get_team_name, get_positions, insert_stats, errorHandler};