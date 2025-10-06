import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    function updateUserChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multiple-choice-question">
                <Form.Label>Choose an answer</Form.Label>
                <Form.Select value={userChoice} onChange={updateUserChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {userChoice === expectedAnswer && <div>✔️</div>}
                {userChoice !== expectedAnswer && <div>❌</div>}
            </div>
        </div>
    );
}
