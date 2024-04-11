import {ArrowDown, ArrowUp} from "lucide-react";
import React from "react";

type GrowthIndicatorProps = {
    growth: number;
};

const GrowthIndicator = ({growth}: GrowthIndicatorProps) => {
    let arrow = null;

    switch (Math.sign(growth)) {
        case 1:
            arrow = <ArrowUp size={16} />;
            break;
        case -1:
            arrow = <ArrowDown size={16} />;
            break;
        default:
            break;
    }

    return (
        <div className="flex justify-center items-center">
            {arrow}
            {growth !== 0 && (
                <span className="font-semibold">{Math.abs(growth)}%</span>
            )}
        </div>
    );
};

export default GrowthIndicator;
