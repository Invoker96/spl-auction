import React, { Component } from "react";
import "./PlayerForm.css";
import player from "../../images/player.jpg";
import { config } from "../../utils/config/config";

class PlayerForm extends Component {
  state = { bidPrice: 0 };

 /**
 * @function nextPlayer
 * @summary This function prevents the default action and calls the parent function onNextPlayer().
 */
  nextPlayer = event => {
    event.preventDefault();
    this.props.onNextPlayer();
  };

 /**
 * @function teamSelected
 * @summary This function fetches the target value from the dropdown and calls the parent function onNextPlayer() with selectedTeam value.
 */
  teamSelected = event => {
    const selectedTeam = event.target.value;
    this.props.onteamSelected(selectedTeam);
  };

 /**
 * @function updateBidPrice
 * @summary This function fetches the bid value and set the state of bidPrice with the input value.
 */
  updateBidPrice = event => {
    const bidPrice = event.target.value;
    this.setState({
      bidPrice
    });
  };

  render() {
    const selectedPlayer = this.props.selectedPlayer;

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
                onChange={this.updateBidPrice}
                value={this.state.bidPrice}
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
              disabled={selectedPlayer.team ? true : false }
              onClick={() => this.props.onSoldPlayer(true, this.state.bidPrice)}
            >
              {config.PLAYER_STATUS.SOLD}
            </button>
            <button
              type="button"
              className="button"
              disabled={selectedPlayer.team ? true : false }
              onClick={() => this.props.onSoldPlayer(false, 0)}
            >
              {config.PLAYER_STATUS.UNSOLD}
            </button>
            <span className="restore-btn" onClick={() => this.props.reAuciton()}>&#9785;</span>
            <input type="submit" value="Next" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default PlayerForm;
