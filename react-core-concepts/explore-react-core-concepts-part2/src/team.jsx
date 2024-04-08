import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)

    function addPlayer(){
        const newTeam = team+1;
        setTeam(newTeam);
    }
    const removePlayer = () => {
        const removePlayer = team-1;
        setTeam(removePlayer)
    }
    return(
        <>
        <h4>Team App</h4>
        <h3>{team}</h3>
        <button onClick={addPlayer}>Add Player</button>
        <button onClick={removePlayer}>Remove Player</button>
        </>
    )
}