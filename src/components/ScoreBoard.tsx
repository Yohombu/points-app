import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Team from "./Team";
import {ITeam} from "../types/pointTypes";

const ScoreBoard: React.FC = () => {

    const initTeams: ITeam[] = [
        {id: 1, name: "Noob-Pirates", points: 0},
        {id: 2, name: "Pied-Pipers", points: 0},
        {id: 3, name: "A-Team", points: 0},
    ];

    const [teams, setTeams] = useState(initTeams);

    const handleOnPointsAdded = (updatedTeam: ITeam) => {
        const allTeams: ITeam[] = teams.slice();
        const objIndex: number = allTeams.findIndex((team: ITeam) => team.id === updatedTeam.id);
        allTeams[objIndex] = updatedTeam;
        setTeams(allTeams);
    }

    const renderTeams = () => {
        return teams.map((team: ITeam) =>
            <Team key={team.id} team={team} onPointsChange={handleOnPointsAdded}/>)
    }

    return (
        <Row className='my-2'>
            <Col xs={12}>
                <h1 className='text-center'>Points App</h1>
            </Col>
            {renderTeams()}
        </Row>

    )
}

export default ScoreBoard;