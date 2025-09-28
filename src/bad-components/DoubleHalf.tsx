import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);

    function doubler(): void {
        setValue(value * 2);
    }

    function halver(): void {
        setValue(value / 2);
    }

    return (
        <div>
            <h3>Double Half</h3>
            <span>
                <div>
                    The current value is: <span>{value}</span>
                </div>
                <Button onClick={doubler}>Double</Button>
                <Button onClick={halver}>Halve</Button>
            </span>
        </div>
    );
}
