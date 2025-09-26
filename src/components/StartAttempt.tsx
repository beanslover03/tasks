import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [active, setActive] = useState<boolean>(false);

    function startQuiz(): void {
        if (attempts !== 0) {
            setActive(true);
            setAttempts(attempts - 1);
        }
    }

    function stopQuiz(): void {
        setActive(false);
    }

    return (
        <div>
            <div>
                <Button onClick={startQuiz} disabled={active || attempts === 0}>
                    Start Quiz
                </Button>
                {<div>Attempts: {attempts}</div>}
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!active}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <span>
                    <Button
                        onClick={() => setAttempts(attempts + 1)}
                        disabled={active}
                    >
                        Mulligan
                    </Button>
                </span>
            </div>
        </div>
    );
}
