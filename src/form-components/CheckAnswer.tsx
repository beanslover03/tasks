import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="enterAnswer">
                <Form.Label>Check Answer: </Form.Label>
                <Form.Control
                    type="string"
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAnswer(event.target.value);
                    }}
                />
            </Form.Group>
            <div>
                {answer === expectedAnswer && <div>✔️</div>}
                {answer !== expectedAnswer && <div>❌</div>}
            </div>
        </div>
    );
}
