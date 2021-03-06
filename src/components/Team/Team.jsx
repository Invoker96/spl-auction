import React from "react";
import "./Team.css";
const renderPlayerList = (playerList, teamName) => {
  return playerList.map(player => {
    if (player.team === teamName) {
  return <li className="team-content" key={player.id}>{player.name}</li>;
    }
  });
};

function Team(props) {
  const { playerList, teamName } = props;
  return <ul className="team-container">{renderPlayerList(playerList, teamName)}</ul>;
}
export default Team;
