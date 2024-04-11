import React, {useEffect, useState} from "react";
import MetricOverview from "./MetricOverview";
import type {IExerciseLog} from "@/lib/interfaces";

const CompetitorsOverview = () => {
    const [entries, setEntries] = useState<IExerciseLog[]>([]);

    useEffect(() => {
        const getLeaderboard = async () => {
            try {
                const response = await fetch("/api/exercise");
                if (!response.ok) {
                    throw new Error("Failed to fetch leaderboard");
                }
                const data = await response.json();
                setEntries(data);
            } catch (error) {
                console.error(error);
            }
        };
        getLeaderboard();
    }, []);

    return (
        <div>
            {entries.length > 0 && <MetricOverview exerciseLog={entries[0]} />}
        </div>
    );
};

export default CompetitorsOverview;
