import React, { Component } from "react";
import banner from "./images/Banner.png";
import "./App.css";
import Header from "./components/Header/Header";
import PlayerForm from "./components/PlayerForm/PlayerForm";
import TeamStatus from "./components/TeamStatus/TeamStatus";
import playerDetails from "./utils/player-details";
import { config } from "./utils/config/config";

class App extends Component {
  state = {
    playerList: playerDetails,
    selectedPlayer: playerDetails.find(player => player.team === undefined),
    selectedTeam: null,
    teams: {
      [config.TEAM.TEAM1]: config.CURRENT_BALANCE,
      [config.TEAM.TEAM2]: config.CURRENT_BALANCE,
      [config.TEAM.TEAM3]: config.CURRENT_BALANCE,
      [config.TEAM.TEAM4]: config.CURRENT_BALANCE
    },
    statusFlag : false
  };

  nextPlayer = () => {
    const { playerList } = this.state;
    const nxtPlayer = playerList.find(player => player.team === undefined);
    if (nxtPlayer) {
      this.setState({
        selectedPlayer: nxtPlayer,
      });
    }
  };

  onTeamSelected = selectedTeam => {
    this.setState({ selectedTeam });
  };

  reAuciton = () => {
    const { playerList } = this.state;
    const currentPlayerList = playerList;
    const unAssignedPLayer = currentPlayerList.find(
      player => player.team === undefined
    );
    if (!unAssignedPLayer) {
      const newPlayerList = [...playerList];
      newPlayerList.forEach(player => {
        if (player.team === config.TEAM.UNSOLD_PLAYERS) {
          player.team = undefined;
        }
      });
      this.setState(
        {
          playerList: newPlayerList
        },
        () => this.nextPlayer()
      );
    }
  };

  soldPlayer = (isSold, price) => {
    const { selectedPlayer, playerList, selectedTeam, teams } = this.state;

    const newPlayerList = [...playerList];
    const newTeams = { ...teams };

    const index = newPlayerList.findIndex(
      player => player.id === selectedPlayer.id
    );

    newPlayerList[index].team = isSold
      ? selectedTeam
      : config.TEAM.UNSOLD_PLAYERS;

    newTeams[selectedTeam] = newTeams[selectedTeam] - price;
    if (( newTeams[selectedTeam] > price && price !== 0 && selectedPlayer.basePrice < price) || !isSold) {
      this.setState({
        playerList: newPlayerList,
        teams: newTeams,
        statusFlag: true
      });
    } else {
      alert("Wrong Input");
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <p className="bg-logo">
          <img className="img-logo" src={banner} alt="logo" />
        </p>
        <PlayerForm
          selectedPlayer={this.state.selectedPlayer}
          onNextPlayer={this.nextPlayer}
          onteamSelected={this.onTeamSelected}
          onSoldPlayer={this.soldPlayer}
          reAuciton={this.reAuciton}
        />
        <TeamStatus
          playerList={this.state.playerList}
          teams={this.state.teams}
        />
      </div>
    );
  }
}

export default App;
