import React from 'react';
import './TeamStatus.css';
import { config } from '../../utils/config/config';
import Team from '../Team/Team';

function TeamStatus (props) { 
 
    const { playerList, teams} = props;
    return (
        <div className="team-status-container">
        <form target="_blank" className="team-status-layout">
        <fieldset className="team-form-label">
            <legend className="team-title">{ config.FORMTITLE.SQUAD }</legend>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.TEAM1 } ({teams[config.TEAM.TEAM1]})</h3>                    
                <Team playerList={ playerList } teamName={config.TEAM.TEAM1}/>
            </div>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.TEAM2 } ({teams[config.TEAM.TEAM2]})</h3>                    
                <Team playerList={ playerList } teamName={config.TEAM.TEAM2}/>
            </div>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.TEAM3 } ({teams[config.TEAM.TEAM3]}) </h3>                    
                <Team playerList={ playerList } teamName={config.TEAM.TEAM3}/>
            </div>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.TEAM4 } ({teams[config.TEAM.TEAM4]})</h3>                    
                <Team playerList={ playerList } teamName={config.TEAM.TEAM4}/>
            </div>
            <div className="team-standing-container">
                <h3 className="team-squad">{ config.TEAM.UNSOLD_PLAYERS } </h3>                    
                <Team playerList={ playerList } teamName={config.TEAM.UNSOLD_PLAYERS}/>
            </div>
        </fieldset>
        </form>
    </div>
    );
}
export default TeamStatus;
