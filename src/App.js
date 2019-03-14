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
  };

 /**
 * @function nextPlayer
 * @summary This function finds the player who is not sold yet and set the state of Selected player to the current player.
 */
  nextPlayer = () => {
    const { playerList } = this.state;
    const nxtPlayer = playerList.find(player => player.team === undefined);
    if (nxtPlayer) {
      this.setState({
        selectedPlayer: nxtPlayer,
      });
    }
  };

 /**
 * @function onTeamSelected
 * @summary This function updates the selectedTeam state with the selectedTeam from dropdown passed as an argument.
 * @param selectedTeam
 */
  onTeamSelected = selectedTeam => {
    this.setState({ selectedTeam });
  };

 /**
 * @function reAuciton
 * @summary This function changes the team of unsold players to undefined and then updating the state to the playerList.
 */
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

 /**
 * @function soldPlayer
 * @summary This function sets the player to sold or unsold based on the isSold flag and setting the state of new team object.
 * It reduces the current credit of the particular team based on the bid price of the player.
 * @param isSold This flag checks whether the player is sold or not based on the flag passed.
 * @param price Price is the bid price at which that particular player is sold to the team
 */
  soldPlayer = (isSold, price) => {
    const { selectedPlayer, playerList, selectedTeam, teams } = this.state;

    const newPlayerList = [...playerList];
    const newTeams = { ...teams };

    const index = newPlayerList.findIndex(
      player => player.id === selectedPlayer.id
    );

    if (( newTeams[selectedTeam] >= price && price !== 0 && selectedPlayer.basePrice <= price) || !isSold) {    
      newPlayerList[index].team = isSold
      ? selectedTeam
      : config.TEAM.UNSOLD_PLAYERS;
      
      newTeams[selectedTeam] = newTeams[selectedTeam] - price;
      
      this.setState({
        playerList: newPlayerList,
        teams: newTeams,
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
       <span className="copy-right">&#169;<strong>Siddhartha Nanda</strong></span>
      </div>
    );
  }
}

export default App;
