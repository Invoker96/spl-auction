import React from 'react';
import './TeamStatus.css';
import banner from '../../images/Banner.png'
import { config } from '../../utils/config/config';
import PlayerEntry from '../PlayerEntry/PlayerEntry';

function TeamStatus (props) { 
    return (
        <div className="team-status-container">
        <form target="_blank" className="team-status-layout"> 
        <fieldset className="team-form-label">
            <legend className="team-title">{ config.FORMTITLE.SQUAD }</legend>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.TEAM1 } </h3>
                <ul>
                    <li>
                        <PlayerEntry/>
                    </li>
                </ul>
            </div>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.TEAM2 } </h3>
                <ul>
                    <li>
                        <PlayerEntry/>
                    </li>
                </ul>
            </div>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.TEAM3 } </h3>
                <ul>
                    <li>
                        <PlayerEntry/>
                    </li>
                </ul>
            </div>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.TEAM4 } </h3>
                <ul>
                    <li>
                        <PlayerEntry/>
                    </li>
                </ul>
            </div>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.UNSOLD_PLAYERS } </h3>
                <ul>
                    <li>
                        <PlayerEntry/>
                    </li>
                </ul>
            </div>
        </fieldset>
        </form>
    </div>
    );
}
export default TeamStatus;
