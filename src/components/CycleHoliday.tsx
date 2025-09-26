import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Halloween"
    | "Christmas"
    | "Thanksgiving"
    | "Easter"
    | "Anzac Day";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Easter");

    const alphabeticalOrder: Record<Holiday, Holiday> = {
        "Anzac Day": "Christmas",
        Christmas: "Easter",
        Easter: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Anzac Day",
    };

    const yearOrder: Record<Holiday, Holiday> = {
        Easter: "Anzac Day",
        "Anzac Day": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "Easter",
    };

    const emojis: Record<Holiday, string> = {
        Halloween: "🎃",
        Christmas: "🎄",
        Thanksgiving: "🦃",
        Easter: "🐇",
        "Anzac Day": "🇳🇿",
    };

    function advanceByAlphabet(): void {
        setHoliday(alphabeticalOrder[holiday]);
    }

    function advanceByYear(): void {
        setHoliday(yearOrder[holiday]);
    }

    return (
        <div>
            <div>Holiday: {emojis[holiday]}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
