import type {IExerciseLog} from "@/lib/interfaces";
import React from "react";
import MetricData from "../molecules/MetricData";

type MetricOverviewProps = {
    exerciseLog: IExerciseLog;
};

const MetricOverview = ({exerciseLog}: MetricOverviewProps) => {
    const {armLeft, armRight, bfi, chest, legLeft, legRight, weight} =
        exerciseLog;
    return (
        <div>
            <div className="flex gap-8">
                <MetricData
                    label="Brazo"
                    data={(armLeft + armRight) / 2.0}
                    growth={3.3}
                />
                <MetricData label="Pecho." data={chest} growth={3.3} />
                <MetricData
                    label="Pierna."
                    data={(legLeft + legRight) / 2.0}
                    growth={3.3}
                />
            </div>
            <div className="flex gap-8">
                <MetricData label="Peso" data={weight} growth={-5} />
                <MetricData label="IGC" data={bfi} growth={2.1} />
            </div>
        </div>
    );
};

export default MetricOverview;
