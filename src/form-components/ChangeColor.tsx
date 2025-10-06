import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");

    const colors = [
        "blue",
        "green",
        "purple",
        "pink",
        "orange",
        "red",
        "white",
        "black",
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }
    return (
        <div>
            <div>
                <span>Choose a Color</span>
            </div>
            <Form.Group>
                <div>
                    {colors.map((color: string) => (
                        <Form.Check
                            inline
                            key={color}
                            type="radio"
                            name="colors"
                            id={`radio-${color}`}
                            label={
                                <span>
                                    <span style={{ backgroundColor: color }}>
                                        {color}
                                    </span>
                                </span>
                            }
                            value={color}
                            checked={selectedColor === color}
                            onChange={updateColor}
                        />
                    ))}
                </div>
            </Form.Group>
            <div>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
