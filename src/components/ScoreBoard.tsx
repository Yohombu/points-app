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

    const handleOnPointsAdded = (team: ITeam) => {
        const allTeams: ITeam[] = teams.slice();
        const objIndex = allTeams.findIndex(team => team.id);
        allTeams[objIndex].points = team.points;
        setTeams(allTeams);
    }

    const renderTeams = () => {
        return teams.map((team: ITeam, index: number) =>
            <Team key={team.id} team={team} OnPointsChange={handleOnPointsAdded}/>)
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