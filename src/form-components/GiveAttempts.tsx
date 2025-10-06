import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }

    function useAttempts(): void {
        setRemainingAttempts(remainingAttempts - 1);
    }

    const handleUpdateAttempts = () => {
        const newAttempts = parseInt(requestedAttempts);
        if (!isNaN(newAttempts)) {
            setRemainingAttempts(remainingAttempts + newAttempts);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <div>
                <span>Number of Attempts:{remainingAttempts}</span>
            </div>
            <Form.Group controlId="enterAttempts" as={Row}>
                <Form.Label column sm={1}>
                    Enter Attempts:
                </Form.Label>
                <Col>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={updateAttempts}
                    />
                </Col>
            </Form.Group>
            <div>
                <Button onClick={useAttempts} disabled={remainingAttempts <= 0}>
                    Use
                </Button>
                <Button onClick={handleUpdateAttempts}>Gain</Button>
            </div>
        </div>
    );
}
