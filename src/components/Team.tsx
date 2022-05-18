import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {ITeam} from "../types/pointTypes";

type TeamProps = {
    team: ITeam
    OnPointsChange: (team: ITeam) => void
}

const Team: React.FC<TeamProps> = (props:TeamProps) => {

    const {team} = props;

    const [points, setPoints] = useState<number | null>(null);

    const [validated, setValidated] = useState(false);

    const handlePointsChange = (pointsVal: string) => {
        setPoints(parseFloat(pointsVal));
    }

    const handlePointsAdd = () => {
        if(!points){
            return;
        }
        props.OnPointsChange({...team, points: team.points + points});
    }

    const handlePointSub = () => {
        if(!points){
            return;
        }
        props.OnPointsChange({...team, points: team.points - points});
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }
    }

    return (
        <Col xs={12} sm={6} lg={4} xl={4} className="pb-5 pb-xl-0 pb-lg-0">
        <Row>
            <Col xs={12}>{team.name}</Col>
            <Col xs={12}>{team.points}</Col>
            <Col xs={12}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="validationCustom01">
                        <Form.Control
                            required
                            type="number"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handlePointsChange(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Points are required
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Col>
            <Col xs={6} className='mt-2'>
                <Button variant="primary" onClick={handlePointSub}>
                    -Sub
                </Button>
            </Col>
            <Col xs={6} className='text-end mt-2'>
                <Button variant="primary" onClick={handlePointsAdd}>
                    Add
                </Button>
            </Col>
        </Row>
        </Col>
    )
}

export default Team;