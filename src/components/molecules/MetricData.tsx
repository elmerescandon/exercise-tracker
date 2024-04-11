import React from "react";
import GrowthIndicator from "./GrowthIndicator";

type MetricDataProps = {
    label: string;
    data: number;
    growth: number;
};

const MetricData = ({label, data, growth}: MetricDataProps) => {
    return (
        <div className="max-w-24 flex flex-col justify-start items-center">
            <p className="text-lg w-full text-center">{label}</p>
            <div className="flex items-center gap-2">
                <p className=" text-lg">{data}</p>
                <GrowthIndicator growth={growth} />
            </div>
        </div>
    );
};

export default MetricData;
