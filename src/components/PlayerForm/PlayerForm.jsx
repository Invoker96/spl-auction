import React from 'react';
import './PlayerForm.css';
import player from '../../images/player.jpg';
import { config } from '../../utils/config/config';

function PlayerForm (props) { 
    return (
        <div className="player-form-container">
        <form target="_blank" className="player-form-layout"> 
        <fieldset className="player-form-label">
            <legend className="player-title">{ config.FORMTITLE.PLAYER_DETAILS }</legend>
            <p className="player-form-field">
                <label htmlFor="name">PLAYER NAME </label> 
                <input type="text" id="name" name="user_name" className="player-field-layout" value={ props.name } ></input>
            </p>
            <p className="player-form-field">
                <label htmlFor="basePrice">BASE PRICE </label> 
                <input type="text" id="basePrice" name="basePrice" className="player-field-layout" value={ props.basePrice } ></input>
            </p>
            <p className="player-form-field">
                <p className="player-form-field" htmlFor="select">BUYER</p>
                <select className="player-field-layout">
                    <option label="Sapient TEAM 1">{ config.TEAM.TEAM1 }</option>
                    <option label="Sapient TEAM 2">{ config.TEAM.TEAM2 }</option>
                    <option label="Sapient TEAM 3">{ config.TEAM.TEAM3 }</option>
                    <option label="Sapient TEAM 4">{ config.TEAM.TEAM4 }</option>
                </select>
            </p>
            <p className="player-form-field">
                <label htmlFor="bidPrice">BID PRICE </label> 
                <input type="text" id="bidPrice" name="bidPrice" className="player-field-layout" value={ props.bidPrice } ></input>
            </p>
            <p className="player-img-container">
                <img className="player-img" src={ player } alt="logo"/>
            </p>
            <p className="player-form-field descriprion">
                <label htmlFor="skill">SKILLS</label>
                <p type="text" id="skill" name="skill" className="player-field-layout player-desc"></p>
            </p>
            <p className="player-form-field descriprion">
                <label htmlFor="availability">AVAILABILITY</label>
                <p type="text" id="availability" name="availability" className="player-field-layout player-desc"></p>
            </p>
            <p className="player-form-field descriprion">
                <label htmlFor="desc">DESCRIPTION:</label>
                <p type="text" id="desc" name="desc" className="player-field-layout player-desc"></p>
            </p>
            <button type="button" className="button" >{ config.PLAYER_STATUS.SOLD }</button>
            <button type="button" className="button" >{ config.PLAYER_STATUS.UNSOLD }</button>
            {/* <input type="submit" value="Submit"/> */}
        </fieldset>
        </form>
    </div>
    );
}
export default PlayerForm;
