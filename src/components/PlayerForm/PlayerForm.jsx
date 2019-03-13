import React, { Component } from "react";
import "./PlayerForm.css";
import player from "../../images/player.jpg";
import { config } from "../../utils/config/config";

class PlayerForm extends Component {
  nextPlayer = event => {
    event.preventDefault();
    this.props.onNextPlayer();
  };

  teamSelected = event => {
    const selectedTeam = event.target.value;
    console.log(selectedTeam);
    this.props.onteamSelected(selectedTeam);
  };

  render() {
    return (
      <div className="player-form-container">
        <form
          target="_blank"
          className="player-form-layout"
          onSubmit={this.nextPlayer}
        >
          <fieldset className="player-form-label">
            <legend className="player-title">
              {config.FORMTITLE.PLAYER_DETAILS}
            </legend>
            <p className="player-form-field">
              <label htmlFor="name">PLAYER NAME </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="player-field-layout"
                value={this.props.selectedPlayer.name}
              />
            </p>
            <p className="player-form-field">
              <label htmlFor="basePrice">BASE PRICE </label>
              <input
                type="text"
                id="basePrice"
                name="basePrice"
                className="player-field-layout"
                value={this.props.selectedPlayer.basePrice}
              />
            </p>
            <p className="player-form-field">
              <p className="player-form-field" htmlFor="select">
                BUYER
              </p>
              <select
                className="player-field-layout"
                id="teamOptions"
                onChange={this.teamSelected}
              >
                <option>{config.TEAM.SELECT}</option>
                <option>{config.TEAM.TEAM1}</option>
                <option>{config.TEAM.TEAM2}</option>
                <option>{config.TEAM.TEAM3}</option>
                <option>{config.TEAM.TEAM4}</option>
              </select>
            </p>
            <p className="player-form-field">
              <label htmlFor="bidPrice">BID PRICE </label>
              <input
                type="text"
                id="bidPrice"
                name="bidPrice"
                className="player-field-layout"
              />
            </p>
            <p className="player-img-container">
              <img className="player-img" src={player} alt="logo" />
            </p>
            <p className="player-form-field descriprion">
              <label htmlFor="skill">SKILLS</label>
              <input
                type="text"
                id="skill"
                name="skill"
                className="player-field-layout player-desc"
                value={this.props.selectedPlayer.skills}
              />
            </p>
            <p className="player-form-field descriprion">
              <label htmlFor="availability">AVAILABILITY</label>
              <input
                type="text"
                id="availability"
                name="availability"
                className="player-field-layout player-desc"
                value={this.props.selectedPlayer.availablity}
              />
            </p>
            <p className="player-form-field descriprion">
              <label htmlFor="desc">DESC: </label>
              <input
                type="text"
                id="desc"
                name="desc"
                className="player-field-layout player-desc"
                value={this.props.selectedPlayer.description}
              />
            </p>
            <button
              type="button"
              className="button"
              onClick={() => this.props.onSoldPlayer(true)}
            >
              {config.PLAYER_STATUS.SOLD}
            </button>
            <button
              type="button"
              className="button"
              onClick={() => this.props.onSoldPlayer(false)}
            >
              {config.PLAYER_STATUS.UNSOLD}
            </button>
            {/* <button
              type="button"
              className="button"
              onClick={() => this.props.onSoldPlayer(false)}
            >
              {config.PLAYER_STATUS.SLOT}
            </button> */}
            <span onClick={() => this.props.reAuciton()}>&#9785;</span>
            <input type="submit" value="Next" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default PlayerForm;
