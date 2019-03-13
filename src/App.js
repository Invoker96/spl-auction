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
    selectedPlayer: playerDetails[0],
    selectedTeam: null
  };

  componentDidMount() {}

  currentPlayer = () => {
    const { selectedPlayer, playerList } = this.state;
    const currentPlayerList = playerList;
    const index = currentPlayerList.findIndex(
      player => player.id === selectedPlayer.id
    );
    if (selectedPlayer.team !== undefined && index >= 0 && index < currentPlayerList.length - 1) {
      this.setState({
        selectedPlayer: currentPlayerList[index + 1]
      });
    }
  };

  onTeamSelected = selectedTeam => {
    this.setState({ selectedTeam });
  };

  reAuciton = () => {
    // const { playerList } = this.state;
    // const unSoldPlayerList = Object.assign({}, playerList);
    // // const index = unSoldPlayerList.findIndex(
    // //   player => player.id === unSoldPlayerList.id
    // // );

    // unSoldPlayerList.team = config.TEAM.UNSOLD_PLAYERS;
    // this.setState({
    //   playerList: unSoldPlayerList
    // });
  }

  soldPlayer = (isSold = true) => {
    const { selectedPlayer, playerList, selectedTeam } = this.state;

    const newPlayerList = [...playerList];

    const index = newPlayerList.findIndex(
      player => player.id === selectedPlayer.id
    );

    newPlayerList[index].team = isSold
      ? selectedTeam
      :  config.TEAM.UNSOLD_PLAYERS;
    this.setState({
      playerList: newPlayerList
    });

    // let playerDetails = Object.assign({}, this.state.selectedPlayer);
    // playerDetails.team = selectedTeam;
    // this.setState({
    //   selectedPlayer: playerDetails,
    //   BuyerTeam: selectedTeam
    //   // selectedPlayer: { BuyerTeam: selectedTeam}
    // });
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
          onNextPlayer={this.currentPlayer}
          onteamSelected={this.onTeamSelected}
          onSoldPlayer={this.soldPlayer}
          reAuciton={this.reAuciton}
        />
        <TeamStatus playerList={this.state.playerList}/>
      </div>
    );
  }
}

export default App;
