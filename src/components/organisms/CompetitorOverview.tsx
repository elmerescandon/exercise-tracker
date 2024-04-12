import React, {useEffect, useState} from "react";
import MetricOverview from "./MetricOverview";
import type {IExerciseLog} from "@/lib/interfaces";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import CompetitorName from "../molecules/CompetitorName";
import {getWeek} from "date-fns";

type CompetitorOverviewProps = {
    userId: string;
};

const CompetitorOverview = ({userId}: CompetitorOverviewProps) => {
    const [entries, setEntries] = useState<IExerciseLog[]>([]);

    useEffect(() => {
        const getLeaderboard = async () => {
            try {
                const response = await fetch(
                    `api/exercise/${userId}?week=${getWeek(new Date())}`
                );
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
        <Accordion type="single" collapsible>
            <AccordionItem value={userId}>
                <AccordionTrigger>
                    <CompetitorName userId={userId} />
                </AccordionTrigger>
                <AccordionContent>
                    {entries.length > 0 ? (
                        <MetricOverview exerciseLog={entries[0]} />
                    ) : (
                        <p>No ingreso datos todavía.</p>
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default CompetitorOverview;
